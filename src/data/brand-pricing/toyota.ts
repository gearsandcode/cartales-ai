import { ModelPricing } from '../types/pricing-types';

export const ToyotaPricing: Record<string, ModelPricing> = {
  Supra: {
    baseModel: 'Supra',
    aliases: ['Supra', 'GR Supra'],
    defaultMultiplier: 4.17,
    generations: [
      {
        generation: 'A80',
        startYear: 1993,
        endYear: 2002,
        basePrice: 50000,
        multiplier: 4.17,
      },
      {
        generation: 'A90',
        startYear: 2019,
        endYear: 2024,
        basePrice: 55000,
        multiplier: 4.58,
      },
    ],
  },
  'Land Cruiser': {
    baseModel: 'Land Cruiser',
    aliases: ['Land Cruiser', 'FJ'],
    defaultMultiplier: 7.08,
    generations: [
      {
        generation: '200 Series',
        startYear: 2008,
        endYear: 2021,
        basePrice: 85000,
        multiplier: 7.08,
      },
      {
        generation: '300 Series',
        startYear: 2022,
        endYear: 2024,
        basePrice: 95000,
        multiplier: 7.92,
      },
    ],
  },
};
