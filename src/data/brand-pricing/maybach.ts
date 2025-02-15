import { ModelPricing } from '../types/pricing-types';

export const MaybachPricing: Record<string, ModelPricing> = {
  '57': {
    baseModel: '57',
    aliases: ['57', '57S'],
    defaultMultiplier: 31.25,
    generations: [
      {
        generation: 'Original',
        startYear: 2002,
        endYear: 2012,
        basePrice: 375000,
        multiplier: 31.25,
      },
    ],
  },
  '62': {
    baseModel: '62',
    aliases: ['62', '62S'],
    defaultMultiplier: 36.67,
    generations: [
      {
        generation: 'Original',
        startYear: 2002,
        endYear: 2012,
        basePrice: 440000,
        multiplier: 36.67,
      },
    ],
  },
};
