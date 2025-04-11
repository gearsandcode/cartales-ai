import { describe, it, expect } from 'vitest';
import { generateCarQuotePrompt } from '../car-quotes';

describe('Car Quotes', () => {
  describe('generateCarQuotePrompt', () => {
    let prompt: string;

    beforeEach(() => {
      prompt = generateCarQuotePrompt();
    });

    it('should return non-empty string', () => {
      expect(prompt).toBeTruthy();
      expect(typeof prompt).toBe('string');
      expect(prompt.length).toBeGreaterThan(0);
    });

    it('should contain key formatting requirements', () => {
      expect(prompt).toContain('Format Requirements:');
      expect(prompt).toContain('markdown formatting');
      expect(prompt).toContain('> "Quote text here."');
      expect(prompt).toContain('- Author Name (YYYY)');
    });

    it('should include all required elements', () => {
      const requirements = [
        'real and verifiable',
        'about cars, driving, or automotive culture',
        'exact year',
        'under 20 words',
        'meaningful and insightful',
        'different types of authors',
        'different eras',
      ];

      requirements.forEach((req) => {
        expect(prompt).toContain(req);
      });
    });

    it('should include key instructions', () => {
      expect(prompt).toContain('You are a car enthusiast');
      expect(prompt).toContain('sharing inspiring quotes');
      expect(prompt).toContain('select a different quote');
    });

    it('should include constraints', () => {
      expect(prompt).toContain('Do not include fictional characters');
      expect(prompt).toContain('Keep it concise');
    });
  });
});
