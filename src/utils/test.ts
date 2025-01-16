import { calculateDepreciation, determinePriceTier } from "./price-calculator";

// Test helper function
function testPricing(
  basePrice: number,
  make: string,
  model: string,
  manufacturingYear: number,
  years: number[]
): void {
  const tier = determinePriceTier(basePrice);
  console.log(
    `\nTesting ${make} ${model} (${
      tier.threshold >= 1000000
        ? "Ultra Exotic"
        : tier.threshold >= 500000
        ? "Exotic"
        : tier.threshold >= 200000
        ? "High End"
        : "Standard"
    })`
  );
  console.log(`Base Price: $${basePrice.toLocaleString()}`);
  console.log(
    `Max Allowed: $${(
      basePrice * tier.config.maxAppreciation
    ).toLocaleString()}`
  );

  years.forEach((year) => {
    const price = calculateDepreciation(
      basePrice,
      make,
      model,
      manufacturingYear,
      year
    );
    console.log(`${year}: $${price.toLocaleString()}`);
  });
}

// // Run some tests
// function runTests(): void {
// Bugatti Veyron (Ultra Exotic)
testPricing(
  1400000,
  "Bugatti",
  "Veyron",
  2006,
  [2006, 2009, 2011, 2015, 2020, 2024]
);

// Ferrari F40 (Exotic)
testPricing(399150, "Ferrari", "F40", 1988, [1988, 1995, 2000, 2010, 2024]);

// Porsche 911 GT3 (High End)
testPricing(223000, "Porsche", "911 GT3", 2010, [2010, 2015, 2020, 2024]);
// }
