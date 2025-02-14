import { ModelPricing } from '../types/pricing-types';

export const AcuraPricing: Record<string, ModelPricing> = {
  NSX: {
    baseModel: 'NSX',
    aliases: ['NSX', 'NSX Type S'],
    defaultMultiplier: 12.92,
    generations: [
      {
        generation: 'First Gen',
        startYear: 1990,
        endYear: 2005,
        basePrice: 155000,
        multiplier: 12.92,
      },
      {
        generation: 'Second Gen',
        startYear: 2016,
        endYear: 2022,
        basePrice: 169500,
        multiplier: 14.13,
      },
    ],
  },
  TLX: {
    baseModel: 'TLX',
    aliases: ['TLX', 'TLX Type S'],
    defaultMultiplier: 3.75,
    generations: [
      {
        generation: 'Second Gen',
        startYear: 2021,
        endYear: 2024,
        basePrice: 45000,
        multiplier: 3.75,
      },
    ],
  },
};
