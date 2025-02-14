import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import {
  generateRandomLocation,
  getNearbyLocation,
} from '../location-generator';

describe('Location Generator', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let randomSpy: any;

  beforeEach(() => {
    randomSpy = vi.spyOn(Math, 'random');
  });

  afterEach(() => {
    randomSpy.mockRestore();
  });

  describe('generateRandomLocation', () => {
    it('should generate valid US city', () => {
      const location = generateRandomLocation();
      expect(location).toMatch(/^[\w\s]+,\s[A-Z]{2}$/);
    });

    it('should generate city from specific region when random is fixed', () => {
      randomSpy.mockReturnValueOnce(0).mockReturnValueOnce(0);
      expect(generateRandomLocation()).toBe('Boston, MA');
    });
  });

  describe('getNearbyLocation', () => {
    it('should stay in same region with 70% probability', () => {
      randomSpy.mockReturnValueOnce(0.5).mockReturnValueOnce(0);
      const newLocation = getNearbyLocation('Boston, MA');
      expect(newLocation).toBe('New York, NY');
    });

    it('should switch regions with 30% probability', () => {
      randomSpy
        .mockReturnValueOnce(0.8)
        .mockReturnValueOnce(0)
        .mockReturnValueOnce(0);
      const newLocation = getNearbyLocation('Boston, MA');
      expect(newLocation).toBe('Chicago, IL');
    });

    it('should handle invalid current location', () => {
      randomSpy.mockReturnValueOnce(0).mockReturnValueOnce(0);
      const newLocation = getNearbyLocation('Invalid City, XX');
      expect(newLocation).toBe('Boston, MA');
    });

    it('should never return same city', () => {
      randomSpy.mockReturnValueOnce(0.5).mockReturnValueOnce(0);
      const newLocation = getNearbyLocation('Boston, MA');
      expect(newLocation).not.toBe('Boston, MA');
    });
  });
});
