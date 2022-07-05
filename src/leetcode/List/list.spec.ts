import { BinarySearch } from './BinarySearch';

describe('List', () => {
  it('binary search', () => {
    const array = [-4, -1, 0, 1, 3, 5];
    const target = 0;
    const result = BinarySearch(array, target);
    expect(result).toBe(2);
  });
});
