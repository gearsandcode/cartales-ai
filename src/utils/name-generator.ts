// Helper to estimate a realistic birth year for a car owner
export function estimateOwnerBirthYear(ownershipStartYear: number): number {
  // Assume most people buy cars between ages 20-50
  const randomAge = Math.floor(Math.random() * 30) + 20; // 20-50 years old
  return ownershipStartYear - randomAge;
}
