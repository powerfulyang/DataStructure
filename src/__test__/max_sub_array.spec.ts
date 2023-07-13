import { max_sub_array } from '@/sliding_window/max_sub_array';
import { describe, expect, it } from '@jest/globals';

describe('tests', () => {
  it('max_sub_array', () => {
    const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    const max = max_sub_array(array);
    expect(max).toBe(6);
  });
});
