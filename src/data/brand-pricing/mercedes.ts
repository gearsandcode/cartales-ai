import { ModelPricing } from "../types/pricing-types";

export const MercedesPricing: Record<string, ModelPricing> = {
  SL: {
    baseModel: "SL",
    aliases: ["SL", "SL-Class"],
    defaultMultiplier: 2.8,
    generations: [
      {
        generation: "R107",
        startYear: 1971,
        endYear: 1989,
        basePrice: 12500,
        multiplier: 2.98,
      },
      {
        generation: "R129",
        startYear: 1989,
        endYear: 2001,
        basePrice: 64500,
        multiplier: 15.36,
      },
      {
        generation: "R230",
        startYear: 2002,
        endYear: 2011,
        basePrice: 86500,
        multiplier: 20.6,
      },
      {
        generation: "R231",
        startYear: 2012,
        endYear: 2020,
        basePrice: 106375,
        multiplier: 25.33,
      },
      {
        generation: "R232",
        startYear: 2021,
        endYear: 2025,
        basePrice: 137400,
        multiplier: 32.71,
      },
    ],
  },
  "AMG GT": {
    baseModel: "AMG GT",
    aliases: ["AMG GT", "GT"],
    defaultMultiplier: 4.2,
    generations: [
      {
        generation: "C190",
        startYear: 2014,
        endYear: 2021,
        basePrice: 115900,
        multiplier: 27.6,
      },
      {
        generation: "X290",
        startYear: 2022,
        endYear: 2025,
        basePrice: 126950,
        multiplier: 30.23,
      },
    ],
  },
};
