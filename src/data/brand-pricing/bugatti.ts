import { ModelPricing } from '../types/pricing-types';

export const BugattiPricing: Record<string, ModelPricing> = {
  Veyron: {
    baseModel: 'Veyron',
    aliases: ['Veyron', 'Veyron 16.4'],
    defaultMultiplier: 116.67,
    generations: [
      {
        generation: 'Original',
        startYear: 2005,
        endYear: 2011,
        basePrice: 1400000,
        multiplier: 116.67,
      },
      {
        generation: 'Super Sport',
        startYear: 2010,
        endYear: 2015,
        basePrice: 2400000,
        multiplier: 200.0,
      },
    ],
  },
  'Type 35': {
    baseModel: 'Type 35',
    aliases: ['Type 35'],
    defaultMultiplier: 1.0,
    generations: [
      {
        generation: 'Original',
        startYear: 1924,
        endYear: 1930,
        basePrice: 7000,
        multiplier: 1.0,
      },
    ],
  },
  'Type 41 Royale': {
    baseModel: 'Type 41 Royale',
    aliases: ['Type 41 Royale', 'Royale'],
    defaultMultiplier: 6.0,
    generations: [
      {
        generation: 'Original',
        startYear: 1926,
        endYear: 1933,
        basePrice: 42000,
        multiplier: 6.0,
      },
    ],
  },
  'Type 57': {
    baseModel: 'Type 57',
    aliases: ['Type 57', 'Type 57SC'],
    defaultMultiplier: 1.71,
    generations: [
      {
        generation: 'Type 57',
        startYear: 1934,
        endYear: 1940,
        basePrice: 12000,
        multiplier: 1.71,
      },
      {
        generation: 'Type 57SC Atlantic',
        startYear: 1936,
        endYear: 1938,
        basePrice: 15000,
        multiplier: 2.14,
      },
    ],
  },
  EB110: {
    baseModel: 'EB110',
    aliases: ['EB110', 'EB110 GT', 'EB110 Super Sport'],
    defaultMultiplier: 54.29,
    generations: [
      {
        generation: 'GT',
        startYear: 1991,
        endYear: 1995,
        basePrice: 380000,
        multiplier: 54.29,
      },
      {
        generation: 'Super Sport',
        startYear: 1992,
        endYear: 1995,
        basePrice: 460000,
        multiplier: 65.71,
      },
    ],
  },
  Chiron: {
    baseModel: 'Chiron',
    aliases: ['Chiron', 'Chiron Super Sport', 'Chiron Pur Sport'],
    defaultMultiplier: 428.29,
    generations: [
      {
        generation: 'Base',
        startYear: 2016,
        endYear: 2022,
        basePrice: 2998000,
        multiplier: 428.29,
      },
      {
        generation: 'Super Sport 300+',
        startYear: 2020,
        endYear: 2022,
        basePrice: 3900000,
        multiplier: 557.14,
      },
      {
        generation: 'Pur Sport',
        startYear: 2021,
        endYear: 2023,
        basePrice: 3600000,
        multiplier: 514.29,
      },
    ],
  },
  Centodieci: {
    baseModel: 'Centodieci',
    aliases: ['Centodieci'],
    defaultMultiplier: 1285.71,
    generations: [
      {
        generation: 'Original',
        startYear: 2022,
        endYear: 2024,
        basePrice: 9000000,
        multiplier: 1285.71,
      },
    ],
  },
};
