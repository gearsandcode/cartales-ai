import { ModelPricing } from "../types/pricing-types";

export const AstonMartinPricing: Record<string, ModelPricing> = {
  DB9: {
    baseModel: "DB9",
    aliases: ["DB9", "DB9 GT"],
    defaultMultiplier: 15.83,
    generations: [
      {
        generation: "Original",
        startYear: 2004,
        endYear: 2016,
        basePrice: 190000,
        multiplier: 15.83,
      },
    ],
  },
  DBS: {
    baseModel: "DBS",
    aliases: ["DBS", "DBS Superleggera"],
    defaultMultiplier: 25.83,
    generations: [
      {
        generation: "V12",
        startYear: 2008,
        endYear: 2012,
        basePrice: 310000,
        multiplier: 25.83,
      },
      {
        generation: "Superleggera",
        startYear: 2018,
        endYear: 2024,
        basePrice: 335000,
        multiplier: 27.92,
      },
    ],
  },
  Vantage: {
    baseModel: "Vantage",
    aliases: ["Vantage", "V8 Vantage", "V12 Vantage"],
    defaultMultiplier: 12.5,
    generations: [
      {
        generation: "V8",
        startYear: 2005,
        endYear: 2017,
        basePrice: 150000,
        multiplier: 12.5,
      },
      {
        generation: "New Vantage",
        startYear: 2018,
        endYear: 2024,
        basePrice: 165000,
        multiplier: 13.75,
      },
    ],
  },
};
