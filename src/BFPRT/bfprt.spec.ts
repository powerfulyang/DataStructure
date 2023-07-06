import { BFPRT } from '@/BFPRT/index';
import { expect, test } from '@jest/globals';

test('bfprt', () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  const bfprt = (arr: number[], begin: number, end: number, k: number): number => {
    if (begin === end) {
      return arr[begin];
    }
    const pivotIndex = BFPRT.getPivotIndex(arr, begin, end);
    const partitionIndex = BFPRT.partition(arr, begin, end, pivotIndex);
    const num = partitionIndex - begin + 1;
    if (num === k) {
      return arr[partitionIndex];
    }
    if (num > k) {
      return bfprt(arr, begin, partitionIndex - 1, k);
    }
    return bfprt(arr, partitionIndex + 1, end, k - num);
  };
  expect(bfprt(numbers, 0, numbers.length - 1, 1)).toBe(1);
  expect(bfprt(numbers, 0, numbers.length - 1, 2)).toBe(2);
  expect(bfprt(numbers, 0, numbers.length - 1, 3)).toBe(3);
  expect(bfprt(numbers, 0, numbers.length - 1, 4)).toBe(4);
  expect(bfprt(numbers, 0, numbers.length - 1, 5)).toBe(5);
  expect(bfprt(numbers, 0, numbers.length - 1, 6)).toBe(6);
  expect(bfprt(numbers, 0, numbers.length - 1, 7)).toBe(7);
  expect(bfprt(numbers, 0, numbers.length - 1, 8)).toBe(8);
});
