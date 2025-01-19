import { ModelPricing } from "../types/pricing-types";

export const VolvoPricing: Record<string, ModelPricing> = {
  XC90: {
    baseModel: "XC90",
    aliases: ["XC90", "XC90 T8"],
    defaultMultiplier: 5.0,
    generations: [
      {
        generation: "First Gen",
        startYear: 2002,
        endYear: 2014,
        basePrice: 45000,
        multiplier: 3.75,
      },
      {
        generation: "Second Gen",
        startYear: 2015,
        endYear: 2024,
        basePrice: 60000,
        multiplier: 5.0,
      },
    ],
  },
  S60: {
    baseModel: "S60",
    aliases: ["S60", "S60 Polestar"],
    defaultMultiplier: 3.75,
    generations: [
      {
        generation: "Third Gen",
        startYear: 2019,
        endYear: 2024,
        basePrice: 45000,
        multiplier: 3.75,
      },
    ],
  },
};
