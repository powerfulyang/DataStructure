import { describe, expect, it } from '@jest/globals';
import { trap } from './trap';

describe('Hard', () => {
  it('trappingRainWater', () => {
    expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
    expect(trap([4, 2, 0, 0])).toBe(0);
  });
});
