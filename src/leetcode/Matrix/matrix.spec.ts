import { describe, expect, it } from '@jest/globals';
import { SpiralMatrixII } from './index';

describe('matrix', () => {
  it('SpiralMatrixII', () => {
    const result = SpiralMatrixII(4);
    expect(result).toEqual([
      [1, 2, 3, 4],
      [12, 13, 14, 5],
      [11, 16, 15, 6],
      [10, 9, 8, 7],
    ]);
  });
});
