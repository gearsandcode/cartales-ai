import { ModelPricing } from "../types/pricing-types";

export const HondaPricing: Record<string, ModelPricing> = {
  "Civic Type R": {
    baseModel: "Civic Type R",
    aliases: ["Civic Type R", "Type R"],
    defaultMultiplier: 3.33,
    generations: [
      {
        generation: "FK8",
        startYear: 2017,
        endYear: 2021,
        basePrice: 40000,
        multiplier: 3.33,
      },
      {
        generation: "FL5",
        startYear: 2022,
        endYear: 2024,
        basePrice: 45000,
        multiplier: 3.75,
      },
    ],
  },
  S2000: {
    baseModel: "S2000",
    aliases: ["S2000", "S2K"],
    defaultMultiplier: 2.92,
    generations: [
      {
        generation: "AP1/AP2",
        startYear: 1999,
        endYear: 2009,
        basePrice: 35000,
        multiplier: 2.92,
      },
    ],
  },
};
