/**
 * @description 堆排序
 * @param arr - 待排序数组
 * @param i - index of the element to be heapified
 * @param len - size of the heap
 * @summary The heap sort algorithm consists of two phases. In the first phase the array is converted into a max heap. And in the second phase the highest element is removed (i.e., the one at the tree root) and the remaining elements are used to create a new max heap.
 */
export const heapify = (arr: number[], i: number, len: number) => {
  let largest = i;
  // left child
  const left = 2 * i + 1;
  // right child
  const right = 2 * i + 2;
  // compare left child with root, if left child is larger than root, then largest is left child
  if (left < len && arr[left] > arr[largest]) {
    largest = left;
  }
  // compare right child with root, if right child is larger than root, then largest is right child
  if (right < len && arr[right] > arr[largest]) {
    largest = right;
  }
  // if largest is not root, swap and continue heapifying
  if (largest !== i) {
    // eslint-disable-next-line no-param-reassign
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, largest, len);
  }
};

export const HeapSort = (arr: number[]) => {
  const len = arr.length;
  // build heap
  // `floor(len / 2)` doesn't mean the middle of the tree, but the number of nodes that aren't leaves.
  for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    heapify(arr, i, len);
  }
  // One by one extract an element from heap
  for (let i = len - 1; i > 0; i--) {
    // Move current root to end
    // eslint-disable-next-line no-param-reassign
    [arr[0], arr[i]] = [arr[i], arr[0]];
    // call max heapify on the reduced heap
    heapify(arr, 0, i);
  }
  return arr;
};
