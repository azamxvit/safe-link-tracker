import { describe, it, expect } from 'vitest';
import { validateUrl } from '@/features/link-checker/utils/validators';

describe('URL Validator', () => {
  it('should accept valid https urls', () => {
    const result = validateUrl('https://google.com');
    expect(result.success).toBe(true);
  });

  it('should reject simple strings', () => {
    const result = validateUrl('not-a-url');
    expect(result.success).toBe(false);
  });

  it('should reject urls without protocol', () => {
    const result = validateUrl('google.com');
    expect(result.success).toBe(false);
  });
});