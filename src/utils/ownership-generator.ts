import {
  CarDetails,
  validateCarDetailsForOwnership,
} from "../types/car-details";
import {
  generateRandomLocation,
  getNearbyLocation,
} from "./location-generator";
import { generateOwnerName, estimateOwnerBirthYear } from "./name-generator";
import {
  calculateInitialPrice,
  calculatePriceForYear,
} from "./price-calculator";
import { OwnershipChain, OwnershipPeriod } from "../types/ownership-chain";

export function generateOwnershipChain(
  carDetails: CarDetails
): OwnershipChain | null {
  const validation = validateCarDetailsForOwnership(carDetails);
  if (!validation.isValid) {
    return null;
  }

  try {
    // Parse years
    const manufacturingYear = parseInt(carDetails.year);
    const purchaseYear = parseInt(carDetails.purchaseYear);
    const durationMatch = carDetails.ownershipDuration.match(/(\d+)/);
    const ownershipDuration = durationMatch ? parseInt(durationMatch[1]) : 0;
    const currentEndYear = purchaseYear + ownershipDuration;

    // Calculate initial price when the car was new
    const initialPrice = calculateInitialPrice(
      carDetails.make,
      carDetails.model,
      manufacturingYear
    );

    // Create current owner period first
    const currentOwner: OwnershipPeriod = {
      startYear: purchaseYear,
      endYear: currentEndYear,
      ownerName: carDetails.ownerName,
      location: carDetails.location,
      purchasePrice: calculatePriceForYear(
        initialPrice,
        manufacturingYear,
        purchaseYear
      ),
    };

    // Calculate number of previous owners
    const yearsBetween = purchaseYear - manufacturingYear;
    const maxPossibleOwners = Math.floor(yearsBetween / 2); // Minimum 2 years per owner

    const numPreviousOwners =
      typeof carDetails.previousOwners === "number"
        ? Math.min(carDetails.previousOwners, maxPossibleOwners)
        : Math.min(3, maxPossibleOwners);

    // Generate previous owners
    const previousOwners: OwnershipPeriod[] = [];
    let lastEndYear = purchaseYear;

    // Calculate average ownership duration
    const yearsToDistribute = yearsBetween;
    const averageOwnership = Math.floor(
      yearsToDistribute / (numPreviousOwners || 1)
    );

    for (let i = 0; i < numPreviousOwners; i++) {
      const isFirstOwner = i === numPreviousOwners - 1;
      const isLastOwner = i === 0;

      let startYear: number;
      if (isFirstOwner) {
        // First owner starts at manufacturing year
        startYear = manufacturingYear;
      } else if (isLastOwner) {
        // Last previous owner ends at current owner's purchase
        startYear = lastEndYear - averageOwnership;
      } else {
        // Middle owners get roughly average duration
        startYear = lastEndYear - averageOwnership;
      }

      // Calculate prices
      const purchasePrice = calculatePriceForYear(
        initialPrice,
        manufacturingYear,
        startYear
      );
      const salePrice = calculatePriceForYear(
        initialPrice,
        manufacturingYear,
        lastEndYear
      );

      const owner: OwnershipPeriod = {
        startYear,
        endYear: lastEndYear,
        ownerName: generateOwnerName(estimateOwnerBirthYear(startYear)),
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

    // Link owners together with consistent prices
    for (let i = 0; i < previousOwners.length - 1; i++) {
      // Ensure sale price of current owner matches purchase price of next owner
      previousOwners[i].salePrice = previousOwners[i + 1].purchasePrice;
      previousOwners[i].soldTo = previousOwners[i + 1].ownerName;
      previousOwners[i + 1].acquiredFrom = previousOwners[i].ownerName;
    }

    // Link last previous owner to current owner with consistent price
    if (previousOwners.length > 0) {
      const lastPreviousOwner = previousOwners[previousOwners.length - 1];
      lastPreviousOwner.soldTo = carDetails.ownerName;
      lastPreviousOwner.salePrice = currentOwner.purchasePrice;
      currentOwner.acquiredFrom = lastPreviousOwner.ownerName;
    }

    const chain = { currentOwner, previousOwners };
    return validateOwnershipChain(chain, manufacturingYear) ? chain : null;
  } catch (error) {
    console.error(error);
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
