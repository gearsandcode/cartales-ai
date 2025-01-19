import { ModelPricing } from "../types/pricing-types";

export const LexusPricing: Record<string, ModelPricing> = {
  LFA: {
    baseModel: "LFA",
    aliases: ["LFA"],
    defaultMultiplier: 31.25,
    generations: [
      {
        generation: "Original",
        startYear: 2010,
        endYear: 2012,
        basePrice: 375000,
        multiplier: 31.25,
      },
    ],
  },
  LC: {
    baseModel: "LC",
    aliases: ["LC 500", "LC 500h"],
    defaultMultiplier: 7.92,
    generations: [
      {
        generation: "First Gen",
        startYear: 2017,
        endYear: 2024,
        basePrice: 95000,
        multiplier: 7.92,
      },
    ],
  },
};
