import { ModelPricing } from "../types/pricing-types";

export const BMWPricing: Record<string, ModelPricing> = {
  M3: {
    baseModel: "M3",
    aliases: ["M3"],
    defaultMultiplier: 2.5,
    generations: [
      {
        generation: "E30",
        startYear: 1986,
        endYear: 1991,
        basePrice: 34950,
        multiplier: 8.32,
      },
      {
        generation: "E36",
        startYear: 1992,
        endYear: 1999,
        basePrice: 35900,
        multiplier: 8.55,
      },
      {
        generation: "E46",
        startYear: 2000,
        endYear: 2006,
        basePrice: 46500,
        multiplier: 11.07,
      },
      {
        generation: "E90/E92/E93",
        startYear: 2007,
        endYear: 2013,
        basePrice: 53900,
        multiplier: 12.83,
      },
      {
        generation: "F80",
        startYear: 2014,
        endYear: 2018,
        basePrice: 62000,
        multiplier: 14.76,
      },
      {
        generation: "G80",
        startYear: 2021,
        endYear: 2025,
        basePrice: 69900,
        multiplier: 16.64,
      },
    ],
  },
  M5: {
    baseModel: "M5",
    aliases: ["M5"],
    defaultMultiplier: 3.0,
    generations: [
      {
        generation: "E28",
        startYear: 1984,
        endYear: 1988,
        basePrice: 45000,
        multiplier: 10.71,
      },
      {
        generation: "E34",
        startYear: 1989,
        endYear: 1995,
        basePrice: 56500,
        multiplier: 13.45,
      },
      {
        generation: "E39",
        startYear: 1998,
        endYear: 2003,
        basePrice: 73400,
        multiplier: 17.48,
      },
      {
        generation: "E60",
        startYear: 2004,
        endYear: 2010,
        basePrice: 85400,
        multiplier: 20.33,
      },
      {
        generation: "F10",
        startYear: 2011,
        endYear: 2016,
        basePrice: 89900,
        multiplier: 21.4,
      },
      {
        generation: "F90",
        startYear: 2017,
        endYear: 2025,
        basePrice: 103500,
        multiplier: 24.64,
      },
    ],
  },
};
