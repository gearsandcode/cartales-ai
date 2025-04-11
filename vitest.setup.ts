import '@testing-library/jest-dom';
import { vi } from 'vitest';

vi.mock('claude-sdk', () => ({
  generatePrompt: vi.fn().mockImplementation((input) => {
    return `Mocked prompt for input: ${JSON.stringify(input)}`;
  }),
}));
