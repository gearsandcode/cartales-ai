import {
  CarDetails,
  validateCarDetailsForOwnership,
} from "../types/car-details";
import {
  generateRandomLocation,
  getNearbyLocation,
} from "./location-generator";
import { calculateDepreciation } from "./price-calculator";
import { OwnershipChain, OwnershipPeriod } from "../types/ownership-chain";
import { calculateModelPrice } from "./price-calculator";

function generatePreviousOwners(
  initialPrice: number,
  carDetails: CarDetails,
  manufacturingYear: number,
  purchaseYear: number,
  numPreviousOwners: number
): OwnershipPeriod[] {
  const previousOwners: OwnershipPeriod[] = [];
  let lastEndYear = purchaseYear;

  // Calculate average ownership duration
  const yearsBetween = purchaseYear - manufacturingYear;
  const averageOwnership = Math.floor(yearsBetween / (numPreviousOwners || 1));

  for (let i = 0; i < numPreviousOwners; i++) {
    const isFirstOwner = i === numPreviousOwners - 1;
    const isLastOwner = i === 0;

    let startYear: number;
    if (isFirstOwner) {
      startYear = manufacturingYear;
    } else if (isLastOwner) {
      startYear = lastEndYear - averageOwnership;
    } else {
      startYear = lastEndYear - averageOwnership;
    }

    // Calculate purchase price
    const purchasePrice = calculateDepreciation(
      initialPrice,
      carDetails.make,
      carDetails.model,
      manufacturingYear,
      startYear
    );

    // Calculate sale price
    const salePrice = calculateDepreciation(
      initialPrice,
      carDetails.make,
      carDetails.model,
      manufacturingYear,
      lastEndYear
    );

    const owner: OwnershipPeriod = {
      startYear,
      endYear: lastEndYear,
      ownerName: `[OWNER_NAME_${startYear}]`,
      location:
        i === 0
          ? generateRandomLocation()
          : getNearbyLocation(previousOwners[i - 1].location || ""),
      purchasePrice,
      salePrice,
    };

    previousOwners.unshift(owner);
    lastEndYear = startYear;
  }

  return previousOwners;
}

function linkOwnershipPrices(
  previousOwners: OwnershipPeriod[],
  currentOwner: OwnershipPeriod
): void {
  // Link previous owners
  for (let i = 0; i < previousOwners.length - 1; i++) {
    previousOwners[i].salePrice = previousOwners[i + 1].purchasePrice;
    previousOwners[i].soldTo = previousOwners[i + 1].ownerName;
    previousOwners[i + 1].acquiredFrom = previousOwners[i].ownerName;
  }

  // Link to current owner
  if (previousOwners.length > 0) {
    const lastPreviousOwner = previousOwners[previousOwners.length - 1];
    lastPreviousOwner.soldTo = currentOwner.ownerName;
    lastPreviousOwner.salePrice = currentOwner.purchasePrice;
    currentOwner.acquiredFrom = lastPreviousOwner.ownerName;
  }
}

export function generateOwnershipChain(
  carDetails: CarDetails
): OwnershipChain | null {
  const validation = validateCarDetailsForOwnership(carDetails);
  if (!validation.isValid) {
    return null;
  }

  try {
    const manufacturingYear = parseInt(carDetails.year);
    const purchaseYear = parseInt(carDetails.purchaseYear);
    const durationMatch = carDetails.ownershipDuration.match(/(\d+)/);
    const ownershipDuration = durationMatch ? parseInt(durationMatch[1]) : 0;
    const currentEndYear = purchaseYear + ownershipDuration;

    // Calculate initial price
    const initialPrice = calculateModelPrice(
      carDetails.make,
      carDetails.model,
      manufacturingYear
    );

    // Create current owner period
    const currentOwnerPrice = calculateDepreciation(
      initialPrice,
      carDetails.make,
      carDetails.model,
      manufacturingYear,
      purchaseYear
    );

    const currentOwner: OwnershipPeriod = {
      startYear: purchaseYear,
      endYear: currentEndYear,
      ownerName: carDetails.ownerName,
      location: carDetails.location,
      purchasePrice: currentOwnerPrice,
    };

    // Calculate previous owners
    const yearsBetween = purchaseYear - manufacturingYear;
    const maxPossibleOwners = Math.floor(yearsBetween / 2);
    const numPreviousOwners =
      typeof carDetails.previousOwners === "number"
        ? Math.min(carDetails.previousOwners, maxPossibleOwners)
        : Math.min(3, maxPossibleOwners);

    const previousOwners = generatePreviousOwners(
      initialPrice,
      carDetails,
      manufacturingYear,
      purchaseYear,
      numPreviousOwners
    );

    // Link ownership prices
    linkOwnershipPrices(previousOwners, currentOwner);

    return { currentOwner, previousOwners };
  } catch (error) {
    console.error("Error in ownership chain generation:", error);
    return null;
  }
}

export function validateOwnershipChain(
  chain: OwnershipChain,
  carYear: number
): boolean {
  // Check if the first owner's start year matches or is after the car's manufacturing year
  if (
    chain.previousOwners.length > 0 &&
    chain.previousOwners[0].startYear < carYear
  ) {
    return false;
  }

  // Check for gaps or overlaps in the timeline
  for (let i = 0; i < chain.previousOwners.length - 1; i++) {
    if (
      chain.previousOwners[i].endYear !== chain.previousOwners[i + 1].startYear
    ) {
      return false;
    }
  }

  // Check if the last previous owner connects properly to the current owner
  if (
    chain.previousOwners.length > 0 &&
    chain.previousOwners[chain.previousOwners.length - 1].endYear !==
      chain.currentOwner.startYear
  ) {
    return false;
  }

  // Validate price chains
  for (let i = 0; i < chain.previousOwners.length - 1; i++) {
    if (
      chain.previousOwners[i].salePrice !==
      chain.previousOwners[i + 1].purchasePrice
    ) {
      return false;
    }
  }

  if (chain.previousOwners.length > 0) {
    const lastPreviousOwner =
      chain.previousOwners[chain.previousOwners.length - 1];
    if (lastPreviousOwner.salePrice !== chain.currentOwner.purchasePrice) {
      return false;
    }
  }

  return true;
}
