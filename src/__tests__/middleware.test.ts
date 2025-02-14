import { describe, it, expect, vi, beforeEach } from 'vitest';
import { middleware, config } from '../middleware';
import { NextRequest, NextResponse } from 'next/server';

describe('Middleware', () => {
  let mockDateNow: number;

  beforeEach(() => {
    mockDateNow = 1234567890000;
    vi.spyOn(Date, 'now').mockImplementation(() => mockDateNow);

    new NextRequest(new Request('https://example.com'), {
      headers: new Headers({
        'existing-header': 'value',
      }),
    });
  });

  describe('middleware function', () => {
    it('should add timestamp header to response', () => {
      const response = middleware();
      expect(response).toBeInstanceOf(NextResponse);
      expect(response.headers.get('x-request-timestamp')).toBe(
        mockDateNow.toString()
      );
    });
  });

  describe('config', () => {
    it('should match root path', () => {
      expect(config.matcher).toBe('/');
    });
  });
});
