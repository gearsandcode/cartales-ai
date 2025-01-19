import { ModelPricing } from "../types/pricing-types";

export const McLarenPricing: Record<string, ModelPricing> = {
  F1: {
    baseModel: "F1",
    aliases: ["F1"],
    defaultMultiplier: 80.0,
    generations: [
      {
        generation: "Original",
        startYear: 1992,
        endYear: 1998,
        basePrice: 960000,
        multiplier: 80.0,
      },
    ],
  },
  P1: {
    baseModel: "P1",
    aliases: ["P1"],
    defaultMultiplier: 95.83,
    generations: [
      {
        generation: "Original",
        startYear: 2013,
        endYear: 2015,
        basePrice: 1150000,
        multiplier: 95.83,
      },
    ],
  },
};
