import { BrandConfig, BrandTier } from "../types/pricing";

export const BASE_PRICES: Record<BrandTier, number> = {
  exotic: 12000,
  "ultra-luxury": 10000,
  "top-tier": 6000,
  "mid-luxury": 4000,
  "semi-luxury": 3000,
  standard: 2500,
  economy: 2000,
};

export const BRAND_CONFIGS: Record<string, BrandConfig> = {
  // Tier 1: Exotic Brands
  Bugatti: {
    tier: "exotic",
    baseMultiplier: 12.0,
    yearStarted: 1909,
    depreciationRate: 0.03,
  },
  Ferrari: {
    tier: "exotic",
    baseMultiplier: 8.5,
    yearStarted: 1947,
    depreciationRate: 0.04,
  },
  Lamborghini: {
    tier: "exotic",
    baseMultiplier: 15.0,
    yearStarted: 1963,
    depreciationRate: 0.035,
  },
  McLaren: {
    tier: "exotic",
    baseMultiplier: 12.5,
    yearStarted: 1985,
    depreciationRate: 0.045,
  },
  // ... rest of brands
};

export const DEFAULT_BRAND_CONFIG: BrandConfig = {
  tier: "standard",
  baseMultiplier: 1.0,
  yearStarted: 1900,
  depreciationRate: 0.15,
};
