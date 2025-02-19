import { ModelPricing } from '../types/pricing-types';

export const ChevroletPricing: Record<string, ModelPricing> = {
  Camaro: {
    baseModel: 'Camaro',
    aliases: ['Camaro', 'Camaro SS', 'Camaro Z/28', 'Camaro ZL1'],
    defaultMultiplier: 4.17,
    generations: [
      {
        generation: 'First Gen',
        startYear: 1967,
        endYear: 1969,
        basePrice: 2466,
        multiplier: 0.21,
      },
      {
        generation: 'Second Gen',
        startYear: 1970,
        endYear: 1981,
        basePrice: 2839,
        multiplier: 0.24,
      },
      {
        generation: 'Third Gen',
        startYear: 1982,
        endYear: 1992,
        basePrice: 8995,
        multiplier: 0.75,
      },
      {
        generation: 'Fourth Gen',
        startYear: 1993,
        endYear: 2002,
        basePrice: 13995,
        multiplier: 1.17,
      },
      {
        generation: 'Fifth Gen',
        startYear: 2010,
        endYear: 2015,
        basePrice: 22995,
        multiplier: 1.92,
      },
      {
        generation: 'Sixth Gen',
        startYear: 2016,
        endYear: 2023,
        basePrice: 25995,
        multiplier: 2.17,
      },
      {
        generation: 'ZL1',
        startYear: 2017,
        endYear: 2023,
        basePrice: 63995,
        multiplier: 5.33,
      },
    ],
  },
  Corvette: {
    baseModel: 'Corvette',
    aliases: ['Corvette', 'Vette', 'Stingray', 'Z06', 'ZR1', 'Grand Sport'],
    defaultMultiplier: 5.0,
    generations: [
      {
        generation: 'C1',
        startYear: 1953,
        endYear: 1962,
        basePrice: 3498,
        multiplier: 0.29,
      },
      {
        generation: 'C2',
        startYear: 1963,
        endYear: 1967,
        basePrice: 4252,
        multiplier: 0.35,
      },
      {
        generation: 'C3',
        startYear: 1968,
        endYear: 1982,
        basePrice: 4663,
        multiplier: 0.39,
      },
      {
        generation: 'C4',
        startYear: 1984,
        endYear: 1996,
        basePrice: 21800,
        multiplier: 1.82,
      },
      {
        generation: 'C5',
        startYear: 1997,
        endYear: 2004,
        basePrice: 37495,
        multiplier: 3.12,
      },
      {
        generation: 'C6',
        startYear: 2005,
        endYear: 2013,
        basePrice: 44245,
        multiplier: 3.69,
      },
      {
        generation: 'C7',
        startYear: 2014,
        endYear: 2019,
        basePrice: 51995,
        multiplier: 4.33,
      },
      {
        generation: 'C7 Z06',
        startYear: 2015,
        endYear: 2019,
        basePrice: 78995,
        multiplier: 6.58,
      },
      {
        generation: 'C7 ZR1',
        startYear: 2019,
        endYear: 2019,
        basePrice: 118900,
        multiplier: 9.91,
      },
      {
        generation: 'C8',
        startYear: 2020,
        endYear: 2023,
        basePrice: 59995,
        multiplier: 5.0,
      },
      {
        generation: 'C8 Z06',
        startYear: 2023,
        endYear: 2024,
        basePrice: 106395,
        multiplier: 8.87,
      },
    ],
  },
};
