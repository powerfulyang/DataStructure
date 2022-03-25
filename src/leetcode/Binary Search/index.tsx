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
