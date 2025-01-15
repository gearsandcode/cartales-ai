// utils/location-generator.ts
const US_REGIONS = [
  {
    region: "Northeast",
    cities: [
      "Boston, MA",
      "New York, NY",
      "Philadelphia, PA",
      "Pittsburgh, PA",
      "Providence, RI",
    ],
  },
  {
    region: "Midwest",
    cities: [
      "Chicago, IL",
      "Detroit, MI",
      "Cleveland, OH",
      "Minneapolis, MN",
      "Milwaukee, WI",
    ],
  },
  {
    region: "South",
    cities: [
      "Atlanta, GA",
      "Nashville, TN",
      "Charlotte, NC",
      "Miami, FL",
      "Houston, TX",
    ],
  },
  {
    region: "West",
    cities: [
      "Los Angeles, CA",
      "San Francisco, CA",
      "Seattle, WA",
      "Portland, OR",
      "Denver, CO",
    ],
  },
];

export function generateRandomLocation(): string {
  const region = US_REGIONS[Math.floor(Math.random() * US_REGIONS.length)];
  return region.cities[Math.floor(Math.random() * region.cities.length)];
}

// Helper function to get nearby cities for realistic moves
export function getNearbyLocation(currentLocation: string): string {
  // Find the current region
  const currentRegion = US_REGIONS.find((region) =>
    region.cities.some((city) => city === currentLocation)
  );

  if (!currentRegion) {
    return generateRandomLocation();
  }

  // 70% chance to stay in the same region
  if (Math.random() < 0.7) {
    const otherCities = currentRegion.cities.filter(
      (city) => city !== currentLocation
    );
    return otherCities[Math.floor(Math.random() * otherCities.length)];
  }

  // 30% chance to move to a different region
  const otherRegions = US_REGIONS.filter((region) => region !== currentRegion);
  const newRegion =
    otherRegions[Math.floor(Math.random() * otherRegions.length)];
  return newRegion.cities[Math.floor(Math.random() * newRegion.cities.length)];
}
