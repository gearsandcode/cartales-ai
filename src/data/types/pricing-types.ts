export interface GenerationPricing {
  startYear: number;
  endYear: number;
  basePrice: number;
  multiplier: number;
  generation: string;
}

export interface ModelPricing {
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
