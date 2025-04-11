interface ModelVariation {
  baseModel: string;
  aliases: string[];
  generations?: Record<string, string[]>;
}

const MODEL_VARIATIONS: Record<string, Record<string, ModelVariation>> = {
  Porsche: {
    '911': {
      baseModel: '911',
      aliases: ['911', '911 Carrera', 'Carrera', 'Carrera 4'],
      generations: {
        '964': ['964'],
        '993': ['993'],
        '996': ['996'],
        '997': ['997'],
        '991': ['991'],
        '992': ['992'],
      },
    },
    '911 Turbo': {
      baseModel: '911 Turbo',
      aliases: ['911 Turbo', 'Turbo', '930'],
      generations: {
        '930': ['930'],
        '964 Turbo': ['964 Turbo'],
        '993 Turbo': ['993 Turbo'],
        '996 Turbo': ['996 Turbo'],
        '997 Turbo': ['997 Turbo'],
        '991 Turbo': ['991 Turbo'],
        '992 Turbo': ['992 Turbo'],
      },
    },
    Cayman: {
      baseModel: 'Cayman',
      aliases: ['Cayman', '718 Cayman'],
    },
  },
  'Mercedes-Benz': {
    'S-Class': {
      baseModel: 'S-Class',
      aliases: ['S-Class', 'S Class', 'S-Klasse'],
      generations: {
        W116: ['W116', '116'],
        W126: ['W126', '126'],
        W140: ['W140', '140'],
        W220: ['W220', '220'],
        W221: ['W221', '221'],
        W222: ['W222', '222'],
        W223: ['W223', '223'],
      },
    },
    SL: {
      baseModel: 'SL',
      aliases: ['SL', 'SL-Class'],
      generations: {
        R107: ['R107', '107'],
        R129: ['R129', '129'],
        R230: ['R230', '230'],
        R231: ['R231', '231'],
        R232: ['R232', '232'],
      },
    },
  },
  BMW: {
    '3 Series': {
      baseModel: '3 Series',
      aliases: ['3 Series', '3-Series', '3er'],
      generations: {
        E21: ['E21'],
        E30: ['E30'],
        E36: ['E36'],
        E46: ['E46'],
        E90: ['E90', 'E91', 'E92', 'E93'],
        F30: ['F30', 'F31', 'F34'],
        G20: ['G20', 'G21'],
      },
    },
    M3: {
      baseModel: 'M3',
      aliases: ['M3'],
      generations: {
        'E30 M3': ['E30 M3'],
        'E36 M3': ['E36 M3'],
        'E46 M3': ['E46 M3'],
        'E90 M3': ['E90 M3', 'E92 M3'],
        'F80 M3': ['F80 M3'],
        'G80 M3': ['G80 M3'],
      },
    },
  },
};

export function matchModel(make: string, model: string): string {
  // If make doesn't exist in variations, return original model
  if (!MODEL_VARIATIONS[make]) {
    return model;
  }

  const makeVariations = MODEL_VARIATIONS[make];
  const normalizedModel = model.trim();

  // Check each base model's variations
  for (const [, variation] of Object.entries(makeVariations)) {
    // Check direct aliases first
    if (
      variation.aliases.some(
        (alias) => normalizedModel.toLowerCase() === alias.toLowerCase(),
      )
    ) {
      return variation.baseModel;
    }

    // Check if model contains any alias
    if (
      variation.aliases.some((alias) =>
        normalizedModel.toLowerCase().includes(alias.toLowerCase()),
      )
    ) {
      // Check generations if they exist
      if (variation.generations) {
        for (const [gen, genAliases] of Object.entries(variation.generations)) {
          if (
            genAliases.some((alias) =>
              normalizedModel.toLowerCase().includes(alias.toLowerCase()),
            )
          ) {
            return gen;
          }
        }
      }
      return variation.baseModel;
    }
  }

  // If no match found, return original model
  return model;
}
