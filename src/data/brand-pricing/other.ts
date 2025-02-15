import { ModelPricing } from '../types/pricing-types';

export const OtherPricing: Record<string, ModelPricing> = {
  'GT-R': {
    baseModel: 'GT-R',
    aliases: ['GT-R', 'GTR', 'Nissan GT-R'],
    defaultMultiplier: 8.33,
    generations: [
      {
        generation: 'R35',
        startYear: 2009,
        endYear: 2024,
        basePrice: 100000,
        multiplier: 8.33,
      },
    ],
  },
};
