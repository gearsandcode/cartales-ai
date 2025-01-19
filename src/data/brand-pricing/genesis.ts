import { ModelPricing } from "../types/pricing-types";

export const GenesisPricing: Record<string, ModelPricing> = {
  G90: {
    baseModel: "G90",
    aliases: ["G90"],
    defaultMultiplier: 6.25,
    generations: [
      {
        generation: "Second Gen",
        startYear: 2020,
        endYear: 2024,
        basePrice: 75000,
        multiplier: 6.25,
      },
    ],
  },
};
