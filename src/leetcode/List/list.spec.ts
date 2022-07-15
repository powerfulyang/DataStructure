import { BinarySearch } from './BinarySearch';
import { InterpolationSearch } from './InterpolationSearch';
import { RemoveDuplicatesFromSortedArray, RemoveElement } from '../TwoPointers';

describe('List', () => {
  it('binary search', () => {
    const array = [-4, -1, 0, 1, 3, 5];
    const target = 0;
    const result = BinarySearch(array, target);
    expect(result).toBe(2);
  });

  it('interpolation search', () => {
    const array = [-4, -1, 0, 1, 3, 5];
    const target = 0;
    const result = InterpolationSearch(array, target);
    expect(result).toBe(2);
  });

  it('remove element', () => {
    const array = [1, 2, 3, 4, 5];
    const target = 3;
    const result = RemoveElement(array, target);
    expect(result).toBe(4);
    expect(array.slice(0, result)).toEqual([1, 2, 4, 5]);
  });

  it('remove duplicates from sorted array', () => {
    const array = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
    const result = RemoveDuplicatesFromSortedArray(array);
    expect(result).toBe(5);
    expect(array.slice(0, result)).toEqual([1, 2, 3, 4, 5]);
  });
});
