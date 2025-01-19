import { ModelPricing } from "../types/pricing-types";

export const RollsRoycePricing: Record<string, ModelPricing> = {
  Phantom: {
    baseModel: "Phantom",
    aliases: ["Phantom", "Phantom Extended"],
    defaultMultiplier: 29.17,
    generations: [
      {
        generation: "VII",
        startYear: 2003,
        endYear: 2016,
        basePrice: 350000,
        multiplier: 29.17,
      },
      {
        generation: "VIII",
        startYear: 2017,
        endYear: 2024,
        basePrice: 460000,
        multiplier: 38.33,
      },
    ],
  },
  Ghost: {
    baseModel: "Ghost",
    aliases: ["Ghost", "Ghost Extended"],
    defaultMultiplier: 27.92,
    generations: [
      {
        generation: "First Gen",
        startYear: 2010,
        endYear: 2020,
        basePrice: 335000,
        multiplier: 27.92,
      },
      {
        generation: "Second Gen",
        startYear: 2021,
        endYear: 2024,
        basePrice: 375000,
        multiplier: 31.25,
      },
    ],
  },
  Cullinan: {
    baseModel: "Cullinan",
    aliases: ["Cullinan", "Cullinan Black Badge"],
    defaultMultiplier: 27.5,
    generations: [
      {
        generation: "First Gen",
        startYear: 2018,
        endYear: 2024,
        basePrice: 330000,
        multiplier: 27.5,
      },
    ],
  },
};
