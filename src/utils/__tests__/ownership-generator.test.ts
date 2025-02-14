import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import {
  generateOwnershipChain,
  validateOwnershipChain,
} from '../ownership-generator';
import { CarDetails } from '../../types/car-details';
import { OwnershipChain } from '@/types/ownership-chain';

describe('Ownership Generator', () => {
  let carDetails: CarDetails;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let consoleErrorSpy: any;

  beforeEach(() => {
    consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    carDetails = {
      year: '1990',
      make: 'Toyota',
      model: 'Corolla',
      ownerName: 'Current Owner',
      purchaseYear: '2020',
      ownershipDuration: '3',
      location: 'New York',
      previousOwners: 2,
      acquisitionStory: '',
      departureStory: '',
      customizations: '',
      maintenance: '',
    };
  });

  afterEach(() => {
    consoleErrorSpy.mockReset();
  });

  describe('generateOwnershipChain', () => {
    it('should create continuous ownership timeline', () => {
      const chain = generateOwnershipChain(carDetails);

      expect(chain?.previousOwners[0].startYear).toBe(1990);
      expect(chain?.previousOwners[0].endYear).toBe(2005);

      expect(chain?.previousOwners[1].startYear).toBe(2005);
      expect(chain?.previousOwners[1].endYear).toBe(2020);

      expect(chain?.currentOwner.startYear).toBe(2020);
      expect(chain?.currentOwner.endYear).toBe(2023);
    });

    it('should calculate reasonable ownership durations', () => {
      const chain = generateOwnershipChain(carDetails);

      chain?.previousOwners.forEach((owner) => {
        const duration = owner.endYear - owner.startYear;
        expect(duration).toBeGreaterThanOrEqual(5);
        expect(duration).toBeLessThanOrEqual(20);
      });
    });

    it('should distribute years evenly with single previous owner', () => {
      carDetails.previousOwners = 1;
      const chain = generateOwnershipChain(carDetails);

      expect(chain?.previousOwners).toHaveLength(1);
      expect(chain?.previousOwners[0].startYear).toBe(1990);
      expect(chain?.previousOwners[0].endYear).toBe(2020);
    });

    it('should handle modern cars with fewer years', () => {
      carDetails.year = '2015';
      carDetails.previousOwners = 1;
      const chain = generateOwnershipChain(carDetails);

      expect(chain?.previousOwners[0].startYear).toBe(2015);
      expect(chain?.previousOwners[0].endYear).toBe(2020);
    });
  });

  describe('validateOwnershipChain', () => {
    it('should validate a correct ownership chain', () => {
      const chain: OwnershipChain = {
        currentOwner: {
          startYear: 2020,
          endYear: 2023,
          ownerName: 'Current Owner',
          purchasePrice: 20000,
          location: 'New York',
        },
        previousOwners: [
          {
            startYear: 1990,
            endYear: 2010,
            ownerName: 'Previous Owner 1',
            purchasePrice: 30000,
            salePrice: 25000,
            location: 'Los Angeles',
          },
          {
            startYear: 2010,
            endYear: 2020,
            ownerName: 'Previous Owner 2',
            purchasePrice: 25000,
            salePrice: 20000,
            location: 'Chicago',
          },
        ],
      };

      expect(validateOwnershipChain(chain, 1990)).toBe(true);
    });
    it('should handle empty string for previousOwners', () => {
      const carDetails = {
        year: '2020',
        make: 'Toyota',
        model: 'Camry',
        ownerName: 'Test Owner',
        purchaseYear: '2020',
        ownershipDuration: '3',
        location: 'Test Location',
        previousOwners: 'random',
        acquisitionStory: '',
        departureStory: '',
        customizations: '',
        maintenance: '',
      };

      const chain = generateOwnershipChain(carDetails);

      expect(chain).not.toBeNull();
      expect(validateOwnershipChain(chain!, 2020)).toBe(true);
      expect(chain?.previousOwners).toHaveLength(0);
    });

    it('should handle invalid year formats', () => {
      const invalidCarDetails = {
        year: 'invalid',
        make: 'Toyota',
        model: 'Camry',
        ownerName: 'Test Owner',
        purchaseYear: '2020',
        ownershipDuration: '3',
        location: 'Test Location',
        previousOwners: 2,
        acquisitionStory: '',
        departureStory: '',
        customizations: '',
        maintenance: '',
      };

      const result = generateOwnershipChain(invalidCarDetails);
      expect(result).toBeNull();
    });

    it('should reject chain starting before manufacturing year', () => {
      const chain: OwnershipChain = {
        currentOwner: {
          startYear: 2020,
          endYear: 2023,
          ownerName: 'Current',
          purchasePrice: 20000,
          location: 'NY',
        },
        previousOwners: [
          {
            startYear: 1990, // Before manufacturing year 2000
            endYear: 2020,
            ownerName: 'Previous',
            purchasePrice: 25000,
            salePrice: 20000,
            location: 'LA',
          },
        ],
      };

      expect(validateOwnershipChain(chain, 2000)).toBe(false);
    });

    it('should reject chain with gaps between previous owners', () => {
      const chain: OwnershipChain = {
        currentOwner: {
          startYear: 2020,
          endYear: 2023,
          ownerName: 'Current',
          purchasePrice: 20000,
          location: 'NY',
        },
        previousOwners: [
          {
            startYear: 2000,
            endYear: 2010,
            ownerName: 'First',
            purchasePrice: 30000,
            salePrice: 25000,
            location: 'LA',
          },
          {
            startYear: 2012, // Gap between 2010 and 2012
            endYear: 2020,
            ownerName: 'Second',
            purchasePrice: 25000,
            salePrice: 20000,
            location: 'CHI',
          },
        ],
      };

      expect(validateOwnershipChain(chain, 2000)).toBe(false);
    });

    it('should reject chain with gap before current owner', () => {
      const chain: OwnershipChain = {
        currentOwner: {
          startYear: 2020,
          endYear: 2023,
          ownerName: 'Current',
          purchasePrice: 20000,
          location: 'NY',
        },
        previousOwners: [
          {
            startYear: 2000,
            endYear: 2018, // Gap between 2018 and 2020
            ownerName: 'Previous',
            purchasePrice: 25000,
            salePrice: 20000,
            location: 'LA',
          },
        ],
      };

      expect(validateOwnershipChain(chain, 2000)).toBe(false);
    });
  });
});
