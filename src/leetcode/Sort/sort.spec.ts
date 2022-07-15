import { BubbleSort } from './BubbleSort';
import { QuickSort } from './QuickSort';
import { CountingSort } from './CountingSort';
import { BucketSort } from './BucketSort';

describe('sort', () => {
  const unsortedArray = [1, 3, -1, -3, 5, 3, 6, 7];
  const sortedArray = [-3, -1, 1, 3, 3, 5, 6, 7];

  it('BubbleSort', () => {
    expect(BubbleSort(unsortedArray)).toEqual(sortedArray);
  });

  it('QuickSort', () => {
    expect(QuickSort(unsortedArray)).toEqual(sortedArray);
  });

  it('CountingSort', () => {
    expect(CountingSort(unsortedArray)).toEqual(sortedArray);
  });

  it('BucketSort', () => {
    expect(BucketSort(unsortedArray, 3)).toEqual(sortedArray);
  });
});
