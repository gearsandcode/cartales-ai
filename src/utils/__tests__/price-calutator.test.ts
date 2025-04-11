import { describe, it, expect } from 'vitest';
import {
  calculateModelPrice,
  calculateDepreciation,
} from '../price-calculator';

describe('Price Calculator', () => {
  describe('calculateModelPrice', () => {
    it('should calculate base price for standard car', () => {
      const price = calculateModelPrice('Toyota', 'Camry', 2020);
      expect(price).toBeGreaterThan(25000);
      expect(price).toBeLessThan(35000);
    });

    it('should add premium for sport/GT models', () => {
      const basePrice = calculateModelPrice('Ford', 'Mustang', 2020);
      const gtPrice = calculateModelPrice('Ford', 'Mustang GT', 2020);
      expect(gtPrice).toBeGreaterThan(basePrice);
    });

    it('should handle exotic cars', () => {
      const price = calculateModelPrice('Ferrari', '458', 2015);
      expect(price).toBeGreaterThan(200000);
    });
  });

  describe('calculateDepreciation', () => {
    it('should depreciate standard cars over time', () => {
      const initialPrice = 30000;
      const depreciatedPrice = calculateDepreciation(
        initialPrice,
        'Toyota',
        'Camry',
        2020,
        2023
      );
      expect(depreciatedPrice).toBeLessThan(initialPrice);
    });

    it('should appreciate exotic cars after stabilization period', () => {
      const initialPrice = 250000;
      const appreciatedPrice = calculateDepreciation(
        initialPrice,
        'Ferrari',
        '250 GT',
        1962,
        2023
      );
      expect(appreciatedPrice).toBeGreaterThan(initialPrice);
    });

    it('should return same price for current year', () => {
      const price = 50000;
      const currentPrice = calculateDepreciation(
        price,
        'BMW',
        '3 Series',
        2023,
        2023
      );
      expect(currentPrice).toBe(price);
    });
  });
});
