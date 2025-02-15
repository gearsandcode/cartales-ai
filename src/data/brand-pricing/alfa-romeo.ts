import { ModelPricing } from '../types/pricing-types';

export const AlfaRomeoPricing: Record<string, ModelPricing> = {
  '8C Competizione': {
    baseModel: '8C Competizione',
    aliases: ['8C', '8C Competizione'],
    defaultMultiplier: 20.83,
    generations: [
      {
        generation: 'Original',
        startYear: 2007,
        endYear: 2010,
        basePrice: 250000,
        multiplier: 20.83,
      },
    ],
  },
  Giulia: {
    baseModel: 'Giulia',
    aliases: ['Giulia', 'Giulia Quadrifoglio'],
    defaultMultiplier: 6.25,
    generations: [
      {
        generation: 'Type 952',
        startYear: 2015,
        endYear: 2024,
        basePrice: 75000,
        multiplier: 6.25,
      },
    ],
  },
};
