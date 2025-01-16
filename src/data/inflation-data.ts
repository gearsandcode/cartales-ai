export const INFLATION_MULTIPLIERS: Record<number, number> = {
  1920: 0.58, // Reference: 1926 Bugatti Type 35 at $7,000
  1930: 1.0, // Reference: 1934 Bugatti Type 57 at $12,000
  1950: 1.0, // Base reference: 1955 Ferrari 250 GT at $12,000
  1960: 1.5, // Reference: 1962 Ferrari 250 GTO at $18,500
  1970: 2.3, // Reference: 1972 Ferrari 365 GTC/4 at $27,500
  1980: 5.3, // Reference: 1982 Ferrari 308 GTSi at $64,000
  1990: 17.7, // Mixed reference: 1992 Ferrari 512 TR and 1991 Bugatti EB110 GT
  2000: 116.7, // Reference: 2006 Bugatti Veyron at $1,400,000
  2010: 200.0, // Reference: 2011 Bugatti Veyron Super Sport at $2,400,000
  2020: 325.0, // Reference: 2020 Bugatti Chiron Super Sport 300+ at $3,900,000
};

export function getInflationMultiplier(year: number): number {
  const decade = Math.floor(year / 10) * 10;
  return INFLATION_MULTIPLIERS[decade] || 52.1; // Default to latest multiplier if future year
}
