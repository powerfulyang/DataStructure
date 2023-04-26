import { describe, expect, it } from '@jest/globals';
import { BubbleSort } from './BubbleSort';
import { BucketSort } from './BucketSort';
import { CountingSort } from './CountingSort';
import { HeapSort } from './HeapSort';
import { InsertionSort } from './InsertionSort';
import { MergeSort } from './MergeSort';
import { QuickSort, QuickSortIterative } from './QuickSort';
import { RadixSort } from './RadixSort';
import { SelectionSort } from './SelectionSort';
import { ShellSort } from './ShellSort';

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

  it('SelectionSort', () => {
    expect(SelectionSort(unsortedArray)).toEqual(sortedArray);
  });

  it('InsertionSort', () => {
    expect(InsertionSort(unsortedArray)).toEqual(sortedArray);
  });

  it('HeapSort', () => {
    expect(HeapSort(unsortedArray)).toEqual(sortedArray);
  });

  it('MergeSort', () => {
    expect(MergeSort(unsortedArray)).toEqual(sortedArray);
  });

  it('ShellSort', () => {
    expect(ShellSort(unsortedArray)).toEqual(sortedArray);
  });

  it('RadixSort', () => {
    // not support negative number
    const u = [1, 3, 5, 3, 6, 7];
    expect(RadixSort(u)).toEqual([1, 3, 3, 5, 6, 7]);
  });

  it('QuickSortIterative', () => {
    expect(QuickSortIterative(unsortedArray)).toEqual(sortedArray);
  });
});
