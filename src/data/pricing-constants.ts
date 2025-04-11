import { BrandConfig, BrandTier } from '../types/pricing';

export const BASE_PRICES: Record<BrandTier, number> = {
  exotic: 12000,
  'ultra-luxury': 10000,
  'top-tier': 6000,
  'mid-luxury': 4000,
  'semi-luxury': 3000,
  standard: 2500,
  economy: 2000,
};

const DEFAULT_DEPRECIATION_RATE = 0.15;

const BRAND_TIERS: Record<string, BrandTier> = {
  // Exotic Brands
  Ferrari: 'exotic',
  Lamborghini: 'exotic',
  Bugatti: 'exotic',
  McLaren: 'exotic',
  Pagani: 'exotic',
  Koenigsegg: 'exotic',
  Maserati: 'exotic',
  'Aston Martin': 'exotic',
  DeTomaso: 'exotic',
  Vector: 'exotic',
  Spyker: 'exotic',
  Noble: 'exotic',

  // Ultra Luxury Brands
  'Rolls-Royce': 'ultra-luxury',
  Bentley: 'ultra-luxury',
  Maybach: 'ultra-luxury',

  // Top Tier Luxury/Performance
  Porsche: 'top-tier',
  'Mercedes-Benz': 'top-tier',
  BMW: 'top-tier',
  Audi: 'top-tier',
  Jaguar: 'top-tier',
  'Land Rover': 'top-tier',
  'Range Rover': 'top-tier',
  Lexus: 'top-tier',
  Tesla: 'top-tier',
  Lotus: 'top-tier',
  Alpine: 'top-tier',

  // Mid-Luxury Brands
  Cadillac: 'mid-luxury',
  Acura: 'mid-luxury',
  Infiniti: 'mid-luxury',
  'Alfa Romeo': 'mid-luxury',
  Genesis: 'mid-luxury',
  Volvo: 'mid-luxury',
  Rivian: 'mid-luxury',
  Lucid: 'mid-luxury',
  Polestar: 'mid-luxury',

  // Semi-Luxury Brands
  Lincoln: 'semi-luxury',
  Chrysler: 'semi-luxury',
  Buick: 'semi-luxury',
  DS: 'semi-luxury',
  MINI: 'semi-luxury',
  Saab: 'semi-luxury',

  // Standard Brands
  Chevrolet: 'standard',
  Ford: 'standard',
  Toyota: 'standard',
  Honda: 'standard',
  Volkswagen: 'standard',
  Dodge: 'standard',
  Pontiac: 'standard',
  Oldsmobile: 'standard',
  Plymouth: 'standard',
  Mercury: 'standard',
  Mazda: 'standard',
  Nissan: 'standard',
  Subaru: 'standard',
  Mitsubishi: 'standard',
  Saturn: 'standard',
  Suzuki: 'standard',
  Isuzu: 'standard',
  AMC: 'standard',
  Studebaker: 'standard',
  Packard: 'standard',
  DeSoto: 'standard',
  Hudson: 'standard',
  Nash: 'standard',
  Rambler: 'standard',
  Imperial: 'standard',
  Edsel: 'standard',
  Tucker: 'standard',
  DeLorean: 'standard',
  Eagle: 'standard',
  Fisker: 'standard',
  Smart: 'standard',
  Scion: 'standard',

  // Economy Brands
  Hyundai: 'economy',
  Kia: 'economy',
  Dacia: 'economy',
  Lada: 'economy',
  Yugo: 'economy',
  Daewoo: 'economy',
  Geo: 'economy',

  // Historical Luxury/Premium Brands (may need adjustment based on era)
  Auburn: 'top-tier',
  Cord: 'top-tier',
  Duesenberg: 'ultra-luxury',
  'Pierce-Arrow': 'ultra-luxury',
  LaSalle: 'mid-luxury',
  Stutz: 'top-tier',
  Marmon: 'top-tier',
  'Isotta Fraschini': 'ultra-luxury',
  Delahaye: 'ultra-luxury',
  Delage: 'ultra-luxury',
  'Talbot-Lago': 'ultra-luxury',
  'Hispano-Suiza': 'ultra-luxury',
  Lanchester: 'top-tier',
  Daimler: 'top-tier',
  Jensen: 'top-tier',
  Bristol: 'top-tier',
  'Facel Vega': 'top-tier',
  Iso: 'top-tier',
  Bizzarrini: 'exotic',
  Monteverdi: 'exotic',
  'Dual-Ghia': 'top-tier',
  Cunningham: 'exotic',

  // Modern Performance/Specialty Brands
  Shelby: 'top-tier',
  Hennessey: 'exotic',
  RUF: 'exotic',
  Alpina: 'top-tier',
  AMG: 'top-tier',
  Callaway: 'top-tier',
  Brabus: 'top-tier',
  Saleen: 'top-tier',
  Panoz: 'top-tier',
  Wiesmann: 'top-tier',
  Morgan: 'top-tier',
  TVR: 'top-tier',
  Caterham: 'top-tier',
  Ariel: 'top-tier',
  BAC: 'exotic',
  Radical: 'exotic',
  Rimac: 'exotic',
  'Gordon Murray': 'exotic',
  Zenvo: 'exotic',
};

function getDefaultBrandTier(make: string): BrandTier {
  return BRAND_TIERS[make] || 'standard';
}

export const BRAND_CONFIGS: Record<string, BrandConfig> = {
  // Tier 1: Exotic Brands
  Bugatti: {
    tier: 'exotic',
    baseMultiplier: 12.0,
    yearStarted: 1909,
    depreciationRate: 0.03,
  },
  Ferrari: {
    tier: 'exotic',
    baseMultiplier: 8.5,
    yearStarted: 1947,
    depreciationRate: 0.04,
  },
  Lamborghini: {
    tier: 'exotic',
    baseMultiplier: 15.0,
    yearStarted: 1963,
    depreciationRate: 0.035,
  },
  McLaren: {
    tier: 'exotic',
    baseMultiplier: 12.5,
    yearStarted: 1985,
    depreciationRate: 0.045,
  },
  // ... rest of brands
};

export function getBrandConfig(make: string): BrandConfig {
  // If we have a specific config, use it
  if (BRAND_CONFIGS[make]) {
    return BRAND_CONFIGS[make];
  }

  // Otherwise create a default config based on the brand tier
  const tier = getDefaultBrandTier(make);
  return {
    tier,
    baseMultiplier: tier === 'semi-luxury' ? 1.2 : 1.0,
    yearStarted: 1900,
    depreciationRate: DEFAULT_DEPRECIATION_RATE,
  };
}

export const DEFAULT_BRAND_CONFIG: BrandConfig = {
  tier: 'standard',
  baseMultiplier: 1.0,
  yearStarted: 1900,
  depreciationRate: DEFAULT_DEPRECIATION_RATE,
};

export const INFLATION_DECADES: Record<number, number> = {
  1950: 1.0,
  1960: 1.5,
  1970: 2.3,
  1980: 5.3,
  1990: 17.7,
  2000: 1.25, // Adjusted for modern pricing
  2010: 1.35,
  2020: 1.45,
};
