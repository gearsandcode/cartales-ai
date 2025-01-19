import { ModelPricing } from "../types/pricing-types";

export const BentleyPricing: Record<string, ModelPricing> = {
  "Continental GT": {
    baseModel: "Continental GT",
    aliases: ["Continental GT", "Continental", "Continental GT Speed"],
    defaultMultiplier: 16.67,
    generations: [
      {
        generation: "First Gen",
        startYear: 2003,
        endYear: 2011,
        basePrice: 200000,
        multiplier: 16.67,
      },
      {
        generation: "Second Gen",
        startYear: 2011,
        endYear: 2018,
        basePrice: 220000,
        multiplier: 18.33,
      },
      {
        generation: "Third Gen",
        startYear: 2018,
        endYear: 2024,
        basePrice: 235000,
        multiplier: 19.58,
      },
    ],
  },
  "Flying Spur": {
    baseModel: "Flying Spur",
    aliases: ["Flying Spur", "Continental Flying Spur"],
    defaultMultiplier: 17.08,
    generations: [
      {
        generation: "First Gen",
        startYear: 2005,
        endYear: 2013,
        basePrice: 205000,
        multiplier: 17.08,
      },
      {
        generation: "Third Gen",
        startYear: 2019,
        endYear: 2024,
        basePrice: 245000,
        multiplier: 20.42,
      },
    ],
  },
  Bentayga: {
    baseModel: "Bentayga",
    aliases: ["Bentayga", "Bentayga Speed"],
    defaultMultiplier: 18.33,
    generations: [
      {
        generation: "First Gen",
        startYear: 2015,
        endYear: 2024,
        basePrice: 220000,
        multiplier: 18.33,
      },
    ],
  },
};
