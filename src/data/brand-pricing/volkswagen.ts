import { ModelPricing } from "../types/pricing-types";

export const VolkswagenPricing: Record<string, ModelPricing> = {
  Phaeton: {
    baseModel: "Phaeton",
    aliases: ["Phaeton", "Phaeton W12"],
    defaultMultiplier: 6.25,
    generations: [
      {
        generation: "First Gen",
        startYear: 2002,
        endYear: 2016,
        basePrice: 75000,
        multiplier: 6.25,
      },
    ],
  },
  Touareg: {
    baseModel: "Touareg",
    aliases: ["Touareg", "Touareg V10 TDI"],
    defaultMultiplier: 4.58,
    generations: [
      {
        generation: "First Gen",
        startYear: 2002,
        endYear: 2010,
        basePrice: 55000,
        multiplier: 4.58,
      },
      {
        generation: "Third Gen",
        startYear: 2018,
        endYear: 2024,
        basePrice: 65000,
        multiplier: 5.42,
      },
    ],
  },
};
