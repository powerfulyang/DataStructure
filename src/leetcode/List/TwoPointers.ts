/**
 * #27, https://leetcode.com/problems/remove-element/
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
 * #26, https://leetcode.com/problems/remove-duplicates-from-sorted-array/
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
