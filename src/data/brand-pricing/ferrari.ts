import { ModelPricing } from '../types/pricing-types';

export const FerrariPricing: Record<string, ModelPricing> = {
  F355: {
    baseModel: 'F355',
    aliases: ['F355', '355'],
    defaultMultiplier: 12.5,
    generations: [
      {
        generation: 'F355',
        startYear: 1994,
        endYear: 1999,
        basePrice: 130000,
        multiplier: 31.0,
      },
    ],
  },
  '360': {
    baseModel: '360',
    aliases: ['360', '360 Modena'],
    defaultMultiplier: 15.0,
    generations: [
      {
        generation: '360',
        startYear: 1999,
        endYear: 2005,
        basePrice: 150000,
        multiplier: 35.7,
      },
    ],
  },
  F430: {
    baseModel: 'F430',
    aliases: ['F430', '430'],
    defaultMultiplier: 17.5,
    generations: [
      {
        generation: 'F430',
        startYear: 2004,
        endYear: 2009,
        basePrice: 185000,
        multiplier: 44.0,
      },
    ],
  },
  '458': {
    baseModel: '458',
    aliases: ['458', '458 Italia'],
    defaultMultiplier: 20.0,
    generations: [
      {
        generation: '458',
        startYear: 2009,
        endYear: 2015,
        basePrice: 225000,
        multiplier: 53.6,
      },
    ],
  },
};
