import { ModelPricing } from "../types/pricing-types";

export const JaguarPricing: Record<string, ModelPricing> = {
  XJ220: {
    baseModel: "XJ220",
    aliases: ["XJ220"],
    defaultMultiplier: 41.67,
    generations: [
      {
        generation: "Original",
        startYear: 1992,
        endYear: 1994,
        basePrice: 500000,
        multiplier: 41.67,
      },
    ],
  },
  "F-Type": {
    baseModel: "F-Type",
    aliases: ["F-Type", "F-Type R"],
    defaultMultiplier: 7.5,
    generations: [
      {
        generation: "First Gen",
        startYear: 2013,
        endYear: 2024,
        basePrice: 90000,
        multiplier: 7.5,
      },
    ],
  },
};
