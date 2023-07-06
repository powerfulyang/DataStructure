import { bubbleSort } from '@/sort/bubbleSort';
import { quickSortIterative, quickSortRecursive } from '@/sort/quickSort';
import { expect, test } from '@jest/globals';

test('sort', () => {
  const unSortedArr = [5, 3, 1, 2, 4, 6, 7, 8, 9, 10];
  const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  expect(quickSortRecursive(unSortedArr)).toEqual(sortedArr);
  expect(quickSortIterative(unSortedArr)).toEqual(sortedArr);
  expect(bubbleSort(unSortedArr)).toEqual(sortedArr);
});
