import { BinarySearch } from './BinarySearch';
import { InterpolationSearch } from './InterpolationSearch';

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
});
