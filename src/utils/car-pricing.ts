import { BASE_PRICES, BRAND_CONFIGS } from "@/data/pricing-constants";
import { MODEL_PRICING } from "@/data/brand-pricing";
import { PricingResult } from "@/data/types/pricing-types";

export function findModelPricing(
  make: string,
  model: string,
  year: number
): PricingResult | null {
  // If make doesn't exist in pricing data, return null
  if (!MODEL_PRICING[make]) {
    return null;
  }

  const normalizedModel = model.trim();
  const makeModels = MODEL_PRICING[make];

  // Check each model's variations
  for (const [baseModel, pricing] of Object.entries(makeModels)) {
    // Check if this model matches any aliases
    if (
      pricing.aliases.some((alias) =>
        normalizedModel.toLowerCase().includes(alias.toLowerCase())
      )
    ) {
      // Find the specific generation for this year
      const generation = pricing.generations.find(
        (gen) => year >= gen.startYear && year <= gen.endYear
      );

      if (generation) {
        return {
          basePrice: generation.basePrice,
          multiplier: generation.multiplier,
          generation: generation.generation,
          modelMatched: baseModel,
        };
      }

      // If no specific generation found but model matches
      return {
        basePrice: pricing.generations[0].basePrice, // Use first generation as default
        multiplier: pricing.defaultMultiplier,
        modelMatched: baseModel,
      };
    }
  }

  return null;
}

export function calculateModelPrice(
  make: string,
  model: string,
  year: number,
  inflationMultiplier: number
): number {
  const pricing = findModelPricing(make, model, year);

  if (!pricing) {
    // Fall back to standard pricing calculation
    const brandConfig = BRAND_CONFIGS[make] || {
      tier: "standard",
      baseMultiplier: 1.0,
      yearStarted: 1900,
      depreciationRate: 0.15,
    };

    let price = BASE_PRICES[brandConfig.tier];
    price *= brandConfig.baseMultiplier;
    price *= inflationMultiplier;

    const randomFactor = 0.95 + Math.random() * 0.1;
    price *= randomFactor;

    return Math.round(price * 1000);
  }

  const adjustedPrice = pricing.basePrice * inflationMultiplier;
  return Math.round(adjustedPrice);
}
