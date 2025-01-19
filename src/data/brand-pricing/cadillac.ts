import { ModelPricing } from "../types/pricing-types";

export const CadillacPricing: Record<string, ModelPricing> = {
  Escalade: {
    baseModel: "Escalade",
    aliases: ["Escalade", "Escalade ESV"],
    defaultMultiplier: 7.08,
    generations: [
      {
        generation: "Fourth Gen",
        startYear: 2015,
        endYear: 2020,
        basePrice: 85000,
        multiplier: 7.08,
      },
      {
        generation: "Fifth Gen",
        startYear: 2021,
        endYear: 2024,
        basePrice: 95000,
        multiplier: 7.92,
      },
    ],
  },
  "CTS-V": {
    baseModel: "CTS-V",
    aliases: ["CTS-V", "CTS V"],
    defaultMultiplier: 6.67,
    generations: [
      {
        generation: "Second Gen",
        startYear: 2009,
        endYear: 2015,
        basePrice: 80000,
        multiplier: 6.67,
      },
      {
        generation: "Third Gen",
        startYear: 2016,
        endYear: 2019,
        basePrice: 87000,
        multiplier: 7.25,
      },
    ],
  },
};
