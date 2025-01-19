import { ModelPricing } from "../types/pricing-types";

export const FordPricing: Record<string, ModelPricing> = {
  Mustang: {
    baseModel: "Mustang",
    aliases: [
      "Mustang",
      "Mustang GT",
      "Shelby GT350",
      "Shelby GT500",
      "Mach 1",
    ],
    defaultMultiplier: 4.58,
    generations: [
      {
        generation: "First Gen",
        startYear: 1964,
        endYear: 1973,
        basePrice: 2368,
        multiplier: 0.2,
      },
      {
        generation: "Second Gen",
        startYear: 1974,
        endYear: 1978,
        basePrice: 3934,
        multiplier: 0.33,
      },
      {
        generation: "Third Gen (Fox)",
        startYear: 1979,
        endYear: 1993,
        basePrice: 5940,
        multiplier: 0.5,
      },
      {
        generation: "Fourth Gen",
        startYear: 1994,
        endYear: 2004,
        basePrice: 14995,
        multiplier: 1.25,
      },
      {
        generation: "Fifth Gen",
        startYear: 2005,
        endYear: 2014,
        basePrice: 19995,
        multiplier: 1.67,
      },
      {
        generation: "S550",
        startYear: 2015,
        endYear: 2023,
        basePrice: 26395,
        multiplier: 2.2,
      },
      {
        generation: "GT350",
        startYear: 2015,
        endYear: 2020,
        basePrice: 58995,
        multiplier: 4.92,
      },
      {
        generation: "GT500",
        startYear: 2020,
        endYear: 2022,
        basePrice: 72900,
        multiplier: 6.08,
      },
      {
        generation: "S650",
        startYear: 2024,
        endYear: 2024,
        basePrice: 32515,
        multiplier: 2.71,
      },
    ],
  },
  GT: {
    baseModel: "GT",
    aliases: ["GT", "Ford GT"],
    defaultMultiplier: 41.67,
    generations: [
      {
        generation: "First Gen",
        startYear: 2005,
        endYear: 2006,
        basePrice: 500000,
        multiplier: 41.67,
      },
      {
        generation: "Second Gen",
        startYear: 2017,
        endYear: 2022,
        basePrice: 550000,
        multiplier: 45.83,
      },
    ],
  },
  "F-150 Raptor": {
    baseModel: "F-150 Raptor",
    aliases: ["Raptor", "F-150 Raptor", "F150 Raptor"],
    defaultMultiplier: 6.25,
    generations: [
      {
        generation: "First Gen",
        startYear: 2010,
        endYear: 2014,
        basePrice: 75000,
        multiplier: 6.25,
      },
      {
        generation: "Third Gen",
        startYear: 2021,
        endYear: 2024,
        basePrice: 85000,
        multiplier: 7.08,
      },
    ],
  },
};
