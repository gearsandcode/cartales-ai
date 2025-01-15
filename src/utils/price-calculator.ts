// utils/price-calculator.ts

interface CarPriceFactors {
  basePrice: number;
  yearMultiplier: number;
  condition: number;
  rarity: number;
}

const carValueFactors: Record<string, CarPriceFactors> = {
  Chevrolet: {
    basePrice: 3500,
    yearMultiplier: 1.2,
    condition: 1.0,
    rarity: 1.1,
  },
  Ford: {
    basePrice: 3600,
    yearMultiplier: 1.2,
    condition: 1.0,
    rarity: 1.1,
  },
  Dodge: {
    basePrice: 3700,
    yearMultiplier: 1.25,
    condition: 1.0,
    rarity: 1.2,
  },
  // Add more manufacturers as needed
};

const defaultPriceFactors: CarPriceFactors = {
  basePrice: 3500,
  yearMultiplier: 1.2,
  condition: 1.0,
  rarity: 1.0,
};

export function calculateInitialPrice(
  make: string,
  model: string,
  year: number
): number {
  const factors = carValueFactors[make] || defaultPriceFactors;

  // Calculate base price adjusted for year
  const price =
    factors.basePrice *
    Math.pow(factors.yearMultiplier, 1 + (year - 1960) / 10);

  // Round to nearest $100
  return Math.round(price / 100) * 100;
}

export function calculatePriceForYear(
  initialPrice: number,
  manufacturingYear: number,
  targetYear: number
): number {
  const age = targetYear - manufacturingYear;

  // Depreciation curve
  let depreciation = 1.0;
  if (age <= 5) {
    // Sharp depreciation in first 5 years
    depreciation = 1 - age * 0.15;
  } else if (age <= 15) {
    // Slower depreciation from 5-15 years
    depreciation = 0.25 - (age - 5) * 0.02;
  } else if (age <= 25) {
    // Bottom out and start appreciating as classic
    depreciation = 0.15 + (age - 15) * 0.03;
  } else {
    // Steady appreciation as classic car
    depreciation = 0.45 + (age - 25) * 0.02;
  }

  // Apply inflation factor (rough approximation)
  const inflationFactor = Math.pow(1.04, targetYear - manufacturingYear); // ~4% annual inflation

  // Calculate final price
  let finalPrice = initialPrice * depreciation * inflationFactor;

  // Add some randomization (±10%)
  const randomFactor = 0.9 + Math.random() * 0.2;
  finalPrice *= randomFactor;

  // Round to nearest $100
  return Math.round(finalPrice / 100) * 100;
}
