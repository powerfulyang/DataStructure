import { BubbleSort } from './BubbleSort';
import { QuickSort } from './QuickSort';

describe('sort', () => {
  it('BubbleSort', () => {
    const array = [5, 2, 4, 6, 1, 3];
    const result = BubbleSort(array);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('QuickSort', () => {
    const array = [5, 2, 4, 6, 1, 3];
    const result = QuickSort(array);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
