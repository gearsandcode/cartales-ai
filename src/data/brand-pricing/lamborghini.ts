import { ModelPricing } from "../types/pricing-types";

export const LamborghiniPricing: Record<string, ModelPricing> = {
  "350 GT": {
    baseModel: "350 GT",
    aliases: ["350 GT"],
    defaultMultiplier: 1.16,
    generations: [
      {
        generation: "Original",
        startYear: 1964,
        endYear: 1966,
        basePrice: 13900,
        multiplier: 1.16,
      },
    ],
  },
  Miura: {
    baseModel: "Miura",
    aliases: ["Miura", "Miura P400"],
    defaultMultiplier: 1.67,
    generations: [
      {
        generation: "P400",
        startYear: 1966,
        endYear: 1969,
        basePrice: 20000,
        multiplier: 1.67,
      },
    ],
  },
  Countach: {
    baseModel: "Countach",
    aliases: [
      "Countach",
      "Countach LP400",
      "Countach LP500S",
      "Countach LP5000 QV",
    ],
    defaultMultiplier: 4.33,
    generations: [
      {
        generation: "LP400",
        startYear: 1974,
        endYear: 1977,
        basePrice: 52000,
        multiplier: 4.33,
      },
      {
        generation: "LP500S",
        startYear: 1982,
        endYear: 1985,
        basePrice: 99500,
        multiplier: 8.29,
      },
      {
        generation: "LP5000 QV",
        startYear: 1985,
        endYear: 1988,
        basePrice: 99500,
        multiplier: 8.29,
      },
      {
        generation: "LPI 800-4",
        startYear: 2022,
        endYear: 2024,
        basePrice: 2640000,
        multiplier: 220.0,
      },
    ],
  },
  Diablo: {
    baseModel: "Diablo",
    aliases: ["Diablo", "Diablo VT", "Diablo GT"],
    defaultMultiplier: 17.58,
    generations: [
      {
        generation: "Original",
        startYear: 1990,
        endYear: 1994,
        basePrice: 211000,
        multiplier: 17.58,
      },
      {
        generation: "VT",
        startYear: 1995,
        endYear: 1998,
        basePrice: 239000,
        multiplier: 19.92,
      },
      {
        generation: "GT",
        startYear: 1999,
        endYear: 2001,
        basePrice: 309000,
        multiplier: 25.75,
      },
    ],
  },
};
