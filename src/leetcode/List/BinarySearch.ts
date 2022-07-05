export const BinarySearch = (array: number[], target: number) => {
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
