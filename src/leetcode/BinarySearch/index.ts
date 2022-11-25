/**
 * 注意：每次都要缩减搜索范围，每次缩减不能排除中间值，因为可能是中间值
 * @param nums
 * @param target
 */
export const binarySearch = (nums: number[], target: number): number => {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    // const mid = Math.floor((left + right) / 2); 容易溢出
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

export const binarySearch1 = (array: number[], target: number) => {
  let left = 0;
  let right = array.length; // 区间为 [left, right)
  // [-4, -1, 0, 1, 3, 5], target = 0
  // left = 0, right = 6, midIndex = 3, mid = 1. right = midIndex
  // 维持区间 [left, right)
  // left = 0, right = 3, midIndex = 1, mid = -1. left = midIndex + 1
  // 维持区间 [left, right)
  // left = 1, right = 3, midIndex = 2, mid = 0. find target

  while (left < right) {
    const middleIndex = left + Math.floor((right - left) / 2);
    const middle = array[middleIndex];
    if (target < middle) {
      right = middleIndex; // 去左区间
    } else if (middle < target) {
      left = middleIndex + 1; // 去右区间
    } else {
      return middleIndex;
    }
  }
  return -1;
};

/**
 * 寻找左侧边界的二分搜索
 */
export const leftBound = (nums: number[], target: number) => {
  // [left, right)
  let left = 0;
  let right = nums.length;
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (target > nums[mid]) {
      left = mid + 1;
    } else if (target < nums[mid]) {
      right = mid;
    } else {
      right = mid;
    }
  }
  if (nums[left] === target) {
    return left;
  }
  return -1;
};

/**
 * 寻找右侧边界的二分搜索
 */
export const rightBound = (nums: number[], target: number) => {
  // [left, right)
  let left = 0;
  let right = nums.length;
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (target > nums[mid]) {
      left = mid + 1;
    } else if (target < nums[mid]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  if (nums[left - 1] === target) {
    return left - 1;
  }
  return -1;
};
