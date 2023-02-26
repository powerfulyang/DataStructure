// Divide and Conquer
export const QuickSort = (array: number[]) => {
  // base case
  if (array.length <= 1) return array;
  // 选择基准, 一般选择最后一个
  const pivot = array[array.length - 1];
  const left = [];
  const right = [];
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      // if array[i] equals to pivot, we can put it in either left or right
      right.push(array[i]);
    }
  }
  // 递归，分治
  // Time complexity: O(nlogn)
  // 递归的深度是 O(logn)
  return [...QuickSort(left), pivot, ...QuickSort(right)];
};

/* This function takes last element as pivot,
    places the pivot element at its correct
    position in sorted array, and places all
    smaller (smaller than pivot) to left of
    pivot and all greater elements to right
    of pivot */
function partition(arr: number[], low: number, high: number) {
  let temp;
  const pivot = arr[high];

  // index of smaller element
  let i = low - 1;
  for (let j = low; j <= high - 1; j++) {
    // If current element is smaller
    // than or equal to pivot
    if (arr[j] <= pivot) {
      i++;

      // swap arr[i] and arr[j]
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  // swap arr[i+1] and arr[high]
  // (or pivot)

  temp = arr[i + 1];
  arr[i + 1] = arr[high];
  arr[high] = temp;

  return i + 1;
}

// Iterative Quick Sort
export const QuickSortIterative = (arr: number[]) => {
  let l = 0;
  let h = arr.length - 1;
  // Create an auxiliary stack
  const stack = new Array(h - l + 1);
  stack.fill(0);

  // initialize top of stack
  let top = -1;

  // push initial values of l and h to
  // stack
  stack[++top] = l;
  stack[++top] = h;

  // Keep popping from stack while
  // is not empty
  while (top >= 0) {
    // Pop h and l
    h = stack[top--];
    l = stack[top--];

    // Set pivot element at its
    // correct position in
    // sorted array
    const p = partition(arr, l, h);

    // If there are elements on
    // left side of pivot, then
    // push left side to stack
    if (p - 1 > l) {
      stack[++top] = l;
      stack[++top] = p - 1;
    }

    // If there are elements on
    // right side of pivot, then
    // push right side to stack
    if (p + 1 < h) {
      stack[++top] = p + 1;
      stack[++top] = h;
    }
  }
  return arr;
};
