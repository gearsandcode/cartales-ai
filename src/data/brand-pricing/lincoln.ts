import { ModelPricing } from '../types/pricing-types';

export const LincolnPricing: Record<string, ModelPricing> = {
  Navigator: {
    baseModel: 'Navigator',
    aliases: ['Navigator', 'Navigator L'],
    defaultMultiplier: 6.67,
    generations: [
      {
        generation: 'Fourth Gen',
        startYear: 2018,
        endYear: 2024,
        basePrice: 80000,
        multiplier: 6.67,
      },
    ],
  },
};
