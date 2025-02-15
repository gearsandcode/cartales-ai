import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { estimateOwnerBirthYear } from '../name-generator';

describe('Name Generator', () => {
  describe('estimateOwnerBirthYear', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let randomSpy: any;

    beforeEach(() => {
      randomSpy = vi.spyOn(Math, 'random');
    });

    afterEach(() => {
      randomSpy.mockRestore();
    });

    it('should calculate minimum age (20) correctly', () => {
      randomSpy.mockReturnValue(0);
      const birthYear = estimateOwnerBirthYear(2020);
      expect(birthYear).toBe(2000); // 2020 - 20
    });

    it('should calculate maximum age (49) correctly', () => {
      randomSpy.mockReturnValue(0.99999);
      const birthYear = estimateOwnerBirthYear(2020);
      expect(birthYear).toBe(1971); // 2020 - 49
    });

    it('should generate birth years within valid range', () => {
      const testYear = 2020;
      const samples = Array(100)
        .fill(0)
        .map(() => estimateOwnerBirthYear(testYear));

      samples.forEach((birthYear) => {
        const age = testYear - birthYear;
        expect(age).toBeGreaterThanOrEqual(20);
        expect(age).toBeLessThanOrEqual(49);
      });
    });
  });
});
