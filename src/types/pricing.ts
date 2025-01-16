export type BrandTier =
  | "exotic"
  | "ultra-luxury"
  | "top-tier"
  | "mid-luxury"
  | "semi-luxury"
  | "standard"
  | "economy";

export interface BrandConfig {
  tier: BrandTier;
  baseMultiplier: number;
  yearStarted: number;
  depreciationRate: number;
}

export interface YearRange {
  startYear: number;
  endYear: number;
  basePrice: number;
  multiplier: number;
}

export interface ModelPricing {
  multiplier: number;
  basePrice?: number;
  yearRanges?: YearRange[];
}

export interface GenerationPricing {
  startYear: number;
  endYear: number;
  basePrice: number;
  multiplier: number;
  generation: string;
}

export interface ModelConfig {
  baseModel: string;
  aliases: string[];
  defaultMultiplier: number;
  generations: GenerationPricing[];
}

export interface PricingResult {
  basePrice: number;
  multiplier: number;
  generation?: string;
  modelMatched: string;
}

export interface DepreciationConfig {
  initialRate: number; // Initial depreciation rate per year
  stabilizationYear: number; // Year when depreciation stabilizes
  appreciationRate: number; // Appreciation rate after stabilization
  maxAppreciation: number; // Maximum appreciation multiplier
}
