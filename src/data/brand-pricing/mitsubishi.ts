import { ModelPricing } from '../types/pricing-types';

export const MitsubishiPricing: Record<string, ModelPricing> = {
  'Lancer Evolution': {
    baseModel: 'Lancer Evolution',
    aliases: ['Evolution', 'Evo', 'Lancer Evo'],
    defaultMultiplier: 3.13,
    generations: [
      {
        generation: 'Evo X',
        startYear: 2008,
        endYear: 2016,
        basePrice: 37500,
        multiplier: 3.13,
      },
    ],
  },
};
