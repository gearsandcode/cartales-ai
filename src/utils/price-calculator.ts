import { ModelConfig, DepreciationConfig, BrandTier } from "../types/pricing";
import { MODEL_PRICING } from "../data/model-pricing";
import { getBrandConfig } from "../data/pricing-constants";
import { calculateBasePrice } from "./base-price-calculator";

const MAINTENANCE_MULTIPLIERS: Record<BrandTier, number> = {
  exotic: 5.0,
  "ultra-luxury": 4.0,
  "top-tier": 3.0,
  "mid-luxury": 2.0,
  "semi-luxury": 1.5,
  standard: 1.0,
  economy: 1.0,
};

const PRICE_TIERS: Record<string, DepreciationConfig> = {
  ULTRA_EXOTIC: {
    initialRate: 0.02,
    stabilizationYear: 5,
    appreciationRate: 0.01,
    maxAppreciation: 1.1,
  },
  EXOTIC: {
    initialRate: 0.03,
    stabilizationYear: 7,
    appreciationRate: 0.015,
    maxAppreciation: 1.15,
  },
  HIGH_END: {
    initialRate: 0.05,
    stabilizationYear: 10,
    appreciationRate: 0.02,
    maxAppreciation: 1.2,
  },
  STANDARD: {
    initialRate: 0.15,
    stabilizationYear: 15,
    appreciationRate: 0.01,
    maxAppreciation: 1.25,
  },
};

function getMaintenanceAdjustedDepreciation(
  currentValue: number,
  age: number,
  tier: BrandTier
): number {
  const maintenanceMultiplier = MAINTENANCE_MULTIPLIERS[tier];
  const maintenanceImpact = age * 0.01 * maintenanceMultiplier; // Increased impact per year based on tier
  return currentValue * (1 + maintenanceImpact);
}

function findModelConfig(make: string, model: string): ModelConfig | undefined {
  const makeModels = MODEL_PRICING[make];
  if (!makeModels) return undefined;

  // Try exact match first
  const exactMatch = makeModels[model];
  if (exactMatch) return exactMatch;

  // Try matching aliases
  return Object.values(makeModels).find((config) =>
    config.aliases.some(
      (alias: string) =>
        alias.toLowerCase() === model.toLowerCase() ||
        model.toLowerCase().includes(alias.toLowerCase())
    )
  );
}

function getDepreciationConfig(basePrice: number): DepreciationConfig {
  if (basePrice >= 1000000) return PRICE_TIERS.ULTRA_EXOTIC;
  if (basePrice >= 500000) return PRICE_TIERS.EXOTIC;
  if (basePrice >= 200000) return PRICE_TIERS.HIGH_END;
  return PRICE_TIERS.STANDARD;
}

export function calculateModelPrice(
  make: string,
  model: string,
  year: number
): number {
  // Check for exact model match first
  const modelConfig = findModelConfig(make, model);
  if (modelConfig) {
    const generation = modelConfig.generations.find(
      (gen) => year >= gen.startYear && year <= gen.endYear
    );
    if (generation) {
      return generation.basePrice;
    }
  }

  // For unknown models, calculate based on brand tier and year
  const brandConfig = getBrandConfig(make);

  // Detect performance/luxury packages
  const hasPerformancePackage =
    model.toLowerCase().match(/(ss|gt|sport|custom|super)/i) !== null;

  // Get base price for this type of car in this year
  let price = calculateBasePrice(year, brandConfig.tier, hasPerformancePackage);

  // Add slight random variation (±5%)
  const variation = 0.95 + Math.random() * 0.1;
  price *= variation;

  return Math.round(price);
}

export function calculateDepreciation(
  initialPrice: number,
  make: string,
  model: string,
  manufacturingYear: number,
  targetYear: number
): number {
  if (targetYear === manufacturingYear) return initialPrice;

  const brandConfig = getBrandConfig(make);
  const config = getDepreciationConfig(initialPrice);
  const age = targetYear - manufacturingYear;
  let currentValue = initialPrice;

  if (age <= config.stabilizationYear) {
    // Initial depreciation period
    const depreciation = 1 - age * config.initialRate;
    currentValue = initialPrice * Math.max(depreciation, 0.7);
  } else {
    // Post-stabilization period
    const initialDepreciation =
      1 - config.stabilizationYear * config.initialRate;
    const baseAfterInitialDepreciation =
      initialPrice * Math.max(initialDepreciation, 0.7);
    const appreciationYears = age - config.stabilizationYear;
    const appreciationMultiplier =
      1 + appreciationYears * config.appreciationRate;
    const effectiveMultiplier = Math.min(
      appreciationMultiplier,
      config.maxAppreciation
    );
    currentValue = baseAfterInitialDepreciation * effectiveMultiplier;
  }

  // Apply maintenance cost impact
  currentValue = getMaintenanceAdjustedDepreciation(
    currentValue,
    age,
    brandConfig.tier
  );

  // Add market variation (±5%)
  const marketVariation = 0.95 + Math.random() * 0.1;
  currentValue *= marketVariation;

  // Never exceed maximum appreciation cap (including maintenance costs)
  const maxAllowedValue =
    initialPrice *
    config.maxAppreciation *
    (1 + age * 0.01 * MAINTENANCE_MULTIPLIERS[brandConfig.tier]);

  return Math.round(Math.min(currentValue, maxAllowedValue));
}
