/**
 * #27, https://leetcode.cn/problems/remove-element/
 */
export const RemoveElement = (draft: number[], val: number): number => {
  // 快慢指针
  let slow = 0;
  for (let fast = 0; fast < draft.length; fast++) {
    if (draft[fast] !== val) {
      draft[slow] = draft[fast];
      slow += 1;
    }
  }
  return slow;
};

/**
 * #26, https://leetcode.cn/problems/remove-duplicates-from-sorted-array/
 */
export const RemoveDuplicatesFromSortedArray = (draft: number[]): number => {
  let slow = 0;
  for (let fast = 0; fast < draft.length; fast++) {
    if (draft[slow] !== draft[fast]) {
      draft[slow + 1] = draft[fast];
      slow += 1;
    }
  }
  return slow + 1;
};

/**
 * #977, https://leetcode.cn/problems/squares-of-a-sorted-array/
 */
export const SquaresOfASortedArray = (nums: number[]): number[] => {
  const res = [];
  // Two pointers
  // 因为数组有序，所有只用比较 left 和 right 两个值的绝对值即可
  // origin array [-4, -1, 0, 3, 10]       result
  // i=0, j=4, i<j. l=4, r=10. l<r. j--    result = [10^2]
  // i=0, j=3, i<j. l=4, r=3. l>r. i++     result = [10^2, 4^2]
  // i=1, j=3, i<j. l=1, r=3. l<r. j--     result = [10^2, 4^2, 3^2]
  // i=1, j=2, i<j. l=1, r=0. l>r. i++     result = [10^2, 4^2, 3^2, 1^2]
  // i=2, j=2, i=j. l=0, r=0. l=r. i++ break for loop
  // result = [10^2, 4^2, 3^2, 1^2, 0^2]

  for (let i = 0, j = nums.length - 1; i <= j; ) {
    const left = Math.abs(nums[i]);
    const right = Math.abs(nums[j]);
    if (right > left) {
      // push element to the front of the array
      res.unshift(right * right);
      j -= 1;
    } else {
      res.unshift(left * left);
      i += 1;
    }
  }
  return res;
};
