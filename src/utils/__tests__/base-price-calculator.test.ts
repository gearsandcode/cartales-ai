import { describe, it, expect } from 'vitest';
import { calculateBasePrice } from '../base-price-calculator';

describe('Base Price Calculator', () => {
  describe('Base Decade Prices', () => {
    it('should calculate correct base prices for standard tier', () => {
      expect(calculateBasePrice(1950, 'standard')).toBe(2000);
      expect(calculateBasePrice(1960, 'standard')).toBe(2500);
      expect(calculateBasePrice(1970, 'standard')).toBe(3100);
      expect(calculateBasePrice(2020, 'standard')).toBe(30000);
    });

    it('should fallback to 1970s data for unknown decades', () => {
      const price1940 = calculateBasePrice(1940, 'standard');
      expect(price1940).toBe(3100); // 1970s fallback
    });
  });

  describe('Brand Tier Multipliers', () => {
    it('should apply correct tier multipliers', () => {
      const standardPrice = calculateBasePrice(1990, 'standard');
      const exoticPrice = calculateBasePrice(1990, 'exotic');
      const luxuryPrice = calculateBasePrice(1990, 'ultra-luxury');

      expect(exoticPrice).toBe(Math.round(standardPrice * 14.07));
      expect(luxuryPrice).toBe(Math.round(standardPrice * 6.5));
    });

    it('should maintain price hierarchy', () => {
      const year = 2020;
      const prices = {
        exotic: calculateBasePrice(year, 'exotic'),
        ultraLuxury: calculateBasePrice(year, 'ultra-luxury'),
        topTier: calculateBasePrice(year, 'top-tier'),
        midLuxury: calculateBasePrice(year, 'mid-luxury'),
        semiLuxury: calculateBasePrice(year, 'semi-luxury'),
        standard: calculateBasePrice(year, 'standard'),
        economy: calculateBasePrice(year, 'economy'),
      };

      expect(prices.exotic).toBeGreaterThan(prices.ultraLuxury);
      expect(prices.ultraLuxury).toBeGreaterThan(prices.topTier);
      expect(prices.topTier).toBeGreaterThan(prices.midLuxury);
      expect(prices.midLuxury).toBeGreaterThan(prices.semiLuxury);
      expect(prices.semiLuxury).toBeGreaterThan(prices.standard);
      expect(prices.standard).toBeGreaterThan(prices.economy);
    });
  });

  describe('Performance Package Adjustment', () => {
    it('should apply 30% increase for performance package', () => {
      const basePrice = calculateBasePrice(2020, 'standard', false);
      const perfPrice = calculateBasePrice(2020, 'standard', true);
      expect(perfPrice).toBe(Math.round(basePrice * 1.3));
    });
  });
});
