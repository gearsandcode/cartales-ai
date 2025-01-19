import { ModelPricing } from "../types/pricing-types";

export const MazdaPricing: Record<string, ModelPricing> = {
  "RX-7": {
    baseModel: "RX-7",
    aliases: ["RX-7", "RX7", "FD"],
    defaultMultiplier: 2.92,
    generations: [
      {
        generation: "FD",
        startYear: 1992,
        endYear: 2002,
        basePrice: 35000,
        multiplier: 2.92,
      },
    ],
  },
  "MX-5": {
    baseModel: "MX-5",
    aliases: ["MX-5", "Miata", "MX5"],
    defaultMultiplier: 2.29,
    generations: [
      {
        generation: "ND",
        startYear: 2015,
        endYear: 2024,
        basePrice: 27500,
        multiplier: 2.29,
      },
    ],
  },
};
