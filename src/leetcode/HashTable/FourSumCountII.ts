/**
 * #454, https://leetcode.cn/problems/4sum-ii/
 */
export const FourSumCountII = (
  nums1: number[],
  nums2: number[],
  nums3: number[],
  nums4: number[],
) => {
  const helperMap = new Map<number, number>();
  let resNum = 0;
  let tempVal: number | undefined;
  for (const i of nums1) {
    for (const j of nums2) {
      tempVal = helperMap.get(i + j);
      helperMap.set(i + j, tempVal ? tempVal + 1 : 1);
    }
  }
  for (const k of nums3) {
    for (const l of nums4) {
      tempVal = helperMap.get(0 - (k + l));
      if (tempVal) {
        resNum += tempVal;
      }
    }
  }
  return resNum;
};
