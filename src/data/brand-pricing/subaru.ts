import { ModelPricing } from "../types/pricing-types";

export const SubaruPricing: Record<string, ModelPricing> = {
  "WRX STI": {
    baseModel: "WRX STI",
    aliases: ["WRX STI", "STI"],
    defaultMultiplier: 3.33,
    generations: [
      {
        generation: "VA",
        startYear: 2015,
        endYear: 2021,
        basePrice: 40000,
        multiplier: 3.33,
      },
    ],
  },
};
