import { ModelPricing } from "../types/pricing-types";

export const ChryslerPricing: Record<string, ModelPricing> = {
  "300": {
    baseModel: "300",
    aliases: ["300", "300C", "300 SRT"],
    defaultMultiplier: 4.17,
    generations: [
      {
        generation: "Second Gen",
        startYear: 2011,
        endYear: 2024,
        basePrice: 50000,
        multiplier: 4.17,
      },
    ],
  },
};
