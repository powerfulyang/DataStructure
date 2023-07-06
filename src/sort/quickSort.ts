import { Stack } from '@/leetcode/Stack/Stack';

export function quickSortRecursive(arr: number[]): number[] {
  // base case
  if (arr.length <= 1) {
    return arr;
  }
  // 随机选择一个基准值
  const pivot = Math.floor(Math.random() * arr.length);
  const pivotValue = arr[pivot];
  // 将数组分为两部分
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === pivot) {
      continue;
    }
    if (arr[i] < pivotValue) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  // 递归调用
  return quickSortRecursive(left).concat(pivotValue, quickSortRecursive(right));
}

export function quickSortIterative(arr: number[]): number[] {
  const stack = new Stack<number>();
  stack.push(0);
  stack.push(arr.length - 1);

  while (stack.size) {
    const end = stack.pop();
    const start = stack.pop();

    const pivotIndex = partition(arr, start, end);

    if (pivotIndex - 1 > start) {
      stack.push(start);
      stack.push(pivotIndex - 1);
    }

    if (pivotIndex + 1 < end) {
      stack.push(pivotIndex + 1);
      stack.push(end);
    }
  }

  return arr;
}

function partition(arr: number[], start: number, end: number): number {
  const pivot = arr[end];
  let i = start;

  for (let j = start; j <= end; j++) {
    if (arr[j] < pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }

  [arr[i], arr[end]] = [arr[end], arr[i]];
  return i;
}
