// utils/name-generator.ts

// Common first names by decade
const firstNamesByDecade: Record<string, string[]> = {
  "1950s": [
    "James",
    "Michael",
    "Robert",
    "John",
    "David",
    "Mary",
    "Linda",
    "Patricia",
    "Susan",
    "Barbara",
    "Richard",
    "Thomas",
    "William",
    "Gary",
    "Steven",
    "Carol",
    "Nancy",
    "Karen",
    "Donna",
    "Sandra",
  ],
  "1960s": [
    "Michael",
    "David",
    "John",
    "James",
    "Robert",
    "Lisa",
    "Mary",
    "Susan",
    "Karen",
    "Patricia",
    "Steven",
    "William",
    "Richard",
    "Mark",
    "Thomas",
    "Linda",
    "Barbara",
    "Jennifer",
    "Sandra",
    "Sharon",
  ],
  "1970s": [
    "Michael",
    "Christopher",
    "Jason",
    "David",
    "James",
    "Jennifer",
    "Michelle",
    "Lisa",
    "Amy",
    "Angela",
    "John",
    "Robert",
    "William",
    "Brian",
    "Steven",
    "Melissa",
    "Tracy",
    "Heather",
    "Nicole",
    "Elizabeth",
  ],
  "1980s": [
    "Michael",
    "Christopher",
    "Matthew",
    "Joshua",
    "David",
    "Jennifer",
    "Jessica",
    "Amanda",
    "Sarah",
    "Melissa",
    "Andrew",
    "Daniel",
    "James",
    "Robert",
    "John",
    "Nicole",
    "Michelle",
    "Heather",
    "Amy",
    "Elizabeth",
  ],
};

const lastNames = [
  "Smith",
  "Johnson",
  "Williams",
  "Brown",
  "Jones",
  "Miller",
  "Davis",
  "Garcia",
  "Rodriguez",
  "Martinez",
  "Anderson",
  "Taylor",
  "Thomas",
  "Moore",
  "Jackson",
  "Martin",
  "Lee",
  "Thompson",
  "White",
  "Wilson",
  "Clark",
  "Walker",
  "Hall",
  "Young",
  "Allen",
  "King",
  "Wright",
  "Lopez",
  "Hill",
  "Scott",
  "Green",
  "Adams",
  "Baker",
  "Nelson",
  "Carter",
  "Mitchell",
  "Perez",
  "Roberts",
  "Turner",
  "Phillips",
  "Campbell",
  "Parker",
  "Evans",
  "Edwards",
  "Collins",
];

function getDecadeForYear(year: number): string {
  const decade = Math.floor(year / 10) * 10;
  if (decade < 1950) return "1950s";
  if (decade > 1980) return "1980s";
  return `${decade}s`;
}

export function generateOwnerName(birthYear: number): string {
  const decade = getDecadeForYear(birthYear);
  const firstNames = firstNamesByDecade[decade];

  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

  return `${firstName} ${lastName}`;
}

// Helper to estimate a realistic birth year for a car owner
export function estimateOwnerBirthYear(ownershipStartYear: number): number {
  // Assume most people buy cars between ages 20-50
  const randomAge = Math.floor(Math.random() * 30) + 20; // 20-50 years old
  return ownershipStartYear - randomAge;
}
