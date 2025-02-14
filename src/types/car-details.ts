export type BasicCarDetails = {
  year: string;
  make: string;
  model: string;
  ownerName: string;
  purchaseYear: string;
  ownershipDuration: string;
  location: string;
  acquisitionStory: string;
  departureStory: string;
  previousOwners: string | number;
};

export type ExtraCarDetails = {
  customizations: string;
  maintenance: string;
};

export type CarDetails = BasicCarDetails & ExtraCarDetails;

export function validateCarDetailsForOwnership(details: CarDetails): {
  isValid: boolean;
  error?: string;
} {
  // Check if required fields exist
  const requiredFields = [
    'year',
    'make',
    'model',
    'ownerName',
    'purchaseYear',
    'ownershipDuration',
    'location',
  ];
  for (const field of requiredFields) {
    if (!details[field as keyof CarDetails]) {
      return {
        isValid: false,
        error: `Missing required field: ${field}`,
      };
    }
  }

  // Parse numeric values
  const manufacturingYear = parseInt(details.year);
  const purchaseYear = parseInt(details.purchaseYear);

  // Validate year formats
  if (isNaN(manufacturingYear)) {
    return {
      isValid: false,
      error: `Invalid manufacturing year: ${details.year}`,
    };
  }

  if (isNaN(purchaseYear)) {
    return {
      isValid: false,
      error: `Invalid purchase year: ${details.purchaseYear}`,
    };
  }

  // Parse ownership duration
  const durationMatch = details.ownershipDuration.match(/(\d+)/);
  if (!durationMatch) {
    return {
      isValid: false,
      error: `Invalid ownership duration format: ${details.ownershipDuration}`,
    };
  }

  const ownershipDuration = parseInt(durationMatch[1]);
  if (isNaN(ownershipDuration)) {
    return {
      isValid: false,
      error: `Could not parse ownership duration: ${details.ownershipDuration}`,
    };
  }

  const currentYear = new Date().getFullYear();

  // Validate timeline
  if (manufacturingYear > purchaseYear) {
    return {
      isValid: false,
      error: `Purchase year (${purchaseYear}) cannot be before manufacturing year (${manufacturingYear})`,
    };
  }

  if (purchaseYear > currentYear) {
    return {
      isValid: false,
      error: `Purchase year (${purchaseYear}) cannot be in the future`,
    };
  }

  if (purchaseYear + ownershipDuration > currentYear) {
    return {
      isValid: false,
      error: `Ownership duration extends beyond current year`,
    };
  }

  // Validate reasonable year ranges
  if (manufacturingYear < 1900) {
    return {
      isValid: false,
      error: `Manufacturing year (${manufacturingYear}) is too early`,
    };
  }

  // Validate make and model
  if (details.make.length < 2) {
    return {
      isValid: false,
      error: `Make is too short: ${details.make}`,
    };
  }

  if (details.model.length < 2) {
    return {
      isValid: false,
      error: `Model is too short: ${details.model}`,
    };
  }

  return { isValid: true };
}

const devInitialCarDetails: CarDetails = {
  year: '1970',
  make: 'Chevrolet',
  model: 'Monte Carlo',
  ownerName: 'Jesse',
  purchaseYear: '1995',
  ownershipDuration: '5 years',
  location: 'Independence, MO',
  acquisitionStory: "Found it in a barn, couldn't resist the classic lines",
  departureStory: 'Sold it to fund my next project',
  previousOwners: 'random',
  customizations: 'Restored the original V8, added period-correct wheels',
  maintenance: 'Complete engine rebuild in 1996, new transmission in 1998',
};

const prodInitialCarDetails: CarDetails = {
  year: '',
  make: '',
  model: '',
  ownerName: '',
  purchaseYear: '',
  ownershipDuration: '',
  location: '',
  acquisitionStory: '',
  departureStory: '',
  previousOwners: 'random',
  customizations: '',
  maintenance: '',
};

export const initialCarDetails =
  process.env.NODE_ENV === 'production'
    ? prodInitialCarDetails
    : devInitialCarDetails;
