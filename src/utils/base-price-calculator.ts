import { BrandTier } from '../types/pricing';

interface DecadeBasePrice {
  standard: number;
  ratios: Record<BrandTier, number>;
}

// Base prices by decade derived from known prices in MODEL_PRICING
const DECADE_BASE_PRICES: Record<number, DecadeBasePrice> = {
  1950: {
    standard: 2000,
    ratios: {
      exotic: 6.0, // 12,000 base (1955 Ferrari 250 GT)
      'ultra-luxury': 5.0,
      'top-tier': 3.0,
      'mid-luxury': 2.0,
      'semi-luxury': 1.5,
      standard: 1.0,
      economy: 0.8,
    },
  },
  1960: {
    standard: 2500,
    ratios: {
      exotic: 5.6, // ~14,000 base (1964 Lambo 350 GT)
      'ultra-luxury': 4.8,
      'top-tier': 2.8,
      'mid-luxury': 1.8,
      'semi-luxury': 1.4,
      standard: 1.0,
      economy: 0.8,
    },
  },
  1970: {
    standard: 3100, // Based on 1970 Monte Carlo
    ratios: {
      exotic: 16.77, // ~52,000 base (1974 Countach)
      'ultra-luxury': 8.0,
      'top-tier': 3.0,
      'mid-luxury': 1.8,
      'semi-luxury': 1.3,
      standard: 1.0,
      economy: 0.85,
    },
  },
  1980: {
    standard: 7000,
    ratios: {
      exotic: 14.21, // ~99,500 base (1982 Countach LP500S)
      'ultra-luxury': 7.0,
      'top-tier': 2.8,
      'mid-luxury': 1.7,
      'semi-luxury': 1.3,
      standard: 1.0,
      economy: 0.85,
    },
  },
  1990: {
    standard: 15000,
    ratios: {
      exotic: 14.07, // ~211,000 base (1990 Diablo)
      'ultra-luxury': 6.5,
      'top-tier': 2.6,
      'mid-luxury': 1.6,
      'semi-luxury': 1.25,
      standard: 1.0,
      economy: 0.9,
    },
  },
  2000: {
    standard: 20000,
    ratios: {
      exotic: 70.0, // 1,400,000 base (2006 Veyron)
      'ultra-luxury': 15.0,
      'top-tier': 3.0,
      'mid-luxury': 1.8,
      'semi-luxury': 1.3,
      standard: 1.0,
      economy: 0.9,
    },
  },
  2010: {
    standard: 25000,
    ratios: {
      exotic: 144.0, // ~3,600,000 base (Chiron)
      'ultra-luxury': 16.0,
      'top-tier': 3.2,
      'mid-luxury': 1.9,
      'semi-luxury': 1.35,
      standard: 1.0,
      economy: 0.9,
    },
  },
  2020: {
    standard: 30000,
    ratios: {
      exotic: 150.0, // Modern hypercars
      'ultra-luxury': 18.0,
      'top-tier': 3.5,
      'mid-luxury': 2.0,
      'semi-luxury': 1.4,
      standard: 1.0,
      economy: 0.9,
    },
  },
};

export function calculateBasePrice(
  year: number,
  tier: BrandTier,
  hasPerformancePackage: boolean = false
): number {
  // Find the appropriate decade
  const decade = Math.floor(year / 10) * 10;
  const decadeData = DECADE_BASE_PRICES[decade] || DECADE_BASE_PRICES[1970]; // Default to 1970s if decade not found

  // Get base price for the tier
  const basePrice = decadeData.standard * decadeData.ratios[tier];

  // Adjust for performance packages
  const performanceMultiplier = hasPerformancePackage ? 1.3 : 1.0;

  // Add a small year adjustment within the decade (1-2% per year)
  const yearInDecade = year - decade;
  const yearAdjustment = 1 + yearInDecade * 0.015;

  return Math.round(basePrice * performanceMultiplier * yearAdjustment);
}
