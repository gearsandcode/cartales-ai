import { describe, it, expect } from 'vitest';
import { matchModel } from '../model-matcher';

describe('Model Matcher', () => {
  describe('Porsche Models', () => {
    it('should match base 911 models', () => {
      expect(matchModel('Porsche', '911')).toBe('911');
      expect(matchModel('Porsche', '911 Carrera')).toBe('911');
      expect(matchModel('Porsche', 'Carrera')).toBe('911');
      expect(matchModel('Porsche', 'Carrera 4')).toBe('911');
    });

    it('should preserve generation codes', () => {
      expect(matchModel('Porsche', '964')).toBe('964');
      expect(matchModel('Porsche', '993')).toBe('993');
      expect(matchModel('Porsche', '996')).toBe('996');
      expect(matchModel('Porsche', '997')).toBe('997');
      expect(matchModel('Porsche', '991')).toBe('991');
      expect(matchModel('Porsche', '992')).toBe('992');
    });

    it('should match generation-specific models', () => {
      expect(matchModel('Porsche', '964 Carrera')).toBe('964');
      expect(matchModel('Porsche', '993 Carrera 4')).toBe('993');
      expect(matchModel('Porsche', '996 Carrera S')).toBe('996');
    });
  });
});
