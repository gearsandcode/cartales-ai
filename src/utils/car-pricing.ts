import { BASE_PRICES, BRAND_CONFIGS } from "@/data/pricing-constants";

interface GenerationPricing {
  startYear: number;
  endYear: number;
  basePrice: number;
  multiplier: number;
  generation: string;
}

interface ModelPricing {
  baseModel: string;
  aliases: string[];
  defaultMultiplier: number;
  generations: GenerationPricing[];
}

// Example for Porsche 911
const MODEL_PRICING: Record<string, Record<string, ModelPricing>> = {
  Porsche: {
    "911": {
      baseModel: "911",
      aliases: ["911", "911 Carrera", "Carrera", "Carrera 4"],
      defaultMultiplier: 1.55,
      generations: [
        {
          generation: "Original",
          startYear: 1963,
          endYear: 1973,
          basePrice: 6500,
          multiplier: 1.55,
        },
        {
          generation: "G-Series",
          startYear: 1974,
          endYear: 1989,
          basePrice: 21000,
          multiplier: 5.0,
        },
        {
          generation: "964",
          startYear: 1989,
          endYear: 1994,
          basePrice: 69500,
          multiplier: 16.55,
        },
        {
          generation: "993",
          startYear: 1995,
          endYear: 1998,
          basePrice: 63500,
          multiplier: 15.12,
        },
        {
          generation: "996",
          startYear: 1999,
          endYear: 2004,
          basePrice: 65795,
          multiplier: 15.67,
        },
        {
          generation: "997",
          startYear: 2005,
          endYear: 2012,
          basePrice: 71300,
          multiplier: 16.98,
        },
        {
          generation: "991",
          startYear: 2012,
          endYear: 2019,
          basePrice: 82100,
          multiplier: 19.55,
        },
        {
          generation: "992",
          startYear: 2020,
          endYear: 2025,
          basePrice: 101200,
          multiplier: 24.1,
        },
      ],
    },
    "911 Turbo": {
      baseModel: "911 Turbo",
      aliases: ["911 Turbo", "Turbo", "930"],
      defaultMultiplier: 7.12,
      generations: [
        {
          generation: "930",
          startYear: 1975,
          endYear: 1989,
          basePrice: 29900,
          multiplier: 7.12,
        },
        {
          generation: "964 Turbo",
          startYear: 1990,
          endYear: 1994,
          basePrice: 111000,
          multiplier: 26.43,
        },
        {
          generation: "993 Turbo",
          startYear: 1995,
          endYear: 1998,
          basePrice: 99000,
          multiplier: 23.57,
        },
        {
          generation: "996 Turbo",
          startYear: 2001,
          endYear: 2005,
          basePrice: 116000,
          multiplier: 27.62,
        },
        {
          generation: "997 Turbo",
          startYear: 2006,
          endYear: 2012,
          basePrice: 122900,
          multiplier: 29.26,
        },
        {
          generation: "991 Turbo",
          startYear: 2013,
          endYear: 2019,
          basePrice: 148300,
          multiplier: 35.31,
        },
        {
          generation: "992 Turbo",
          startYear: 2020,
          endYear: 2025,
          basePrice: 203500,
          multiplier: 48.45,
        },
      ],
    },
  },
};

interface PricingResult {
  basePrice: number;
  multiplier: number;
  generation?: string;
  modelMatched: string;
}

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
