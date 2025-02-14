import { describe, it, expect } from 'vitest';
import { cn } from '../utils';

describe('Utils', () => {
  describe('cn', () => {
    it('should handle single class', () => {
      expect(cn('test-class')).toBe('test-class');
    });

    it('should merge multiple classes', () => {
      expect(cn('class1', 'class2')).toBe('class1 class2');
    });

    it('should handle conditional classes', () => {
      expect(cn('base', true && 'included', false && 'excluded')).toBe(
        'base included'
      );
    });

    it('should merge tailwind classes correctly', () => {
      expect(cn('p-4 px-2', 'p-6')).toBe('p-6');
      expect(cn('text-red-500', 'text-blue-500')).toBe('text-blue-500');
    });

    it('should handle empty or undefined inputs', () => {
      expect(cn()).toBe('');
      expect(cn(undefined, 'test', null)).toBe('test');
    });

    it('should handle object notation', () => {
      expect(cn({ 'text-red': true, 'bg-blue': false })).toBe('text-red');
    });
  });
});
