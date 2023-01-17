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
