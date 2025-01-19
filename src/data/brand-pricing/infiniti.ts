import { ModelPricing } from "../types/pricing-types";

export const InfinitiPricing: Record<string, ModelPricing> = {
  Q60: {
    baseModel: "Q60",
    aliases: ["Q60", "Q60 Red Sport"],
    defaultMultiplier: 4.58,
    generations: [
      {
        generation: "Second Gen",
        startYear: 2017,
        endYear: 2024,
        basePrice: 55000,
        multiplier: 4.58,
      },
    ],
  },
  G35: {
    baseModel: "G35",
    aliases: ["G35", "G35 Coupe"],
    defaultMultiplier: 2.92,
    generations: [
      {
        generation: "V35",
        startYear: 2003,
        endYear: 2007,
        basePrice: 35000,
        multiplier: 2.92,
      },
    ],
  },
};
