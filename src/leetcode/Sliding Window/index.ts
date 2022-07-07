/**
 * #209 https://leetcode.cn/problems/minimum-size-subarray-sum/
 */
export const MinimumSizeSubarraySum = (s: number, nums: number[]): number => {
  // 双指针
  // nums = [2,3,1,2,4,3] s = 7
  // left = 0, right = 0, sum = 2
  // left = 0, right = 1, sum = 5
  // left = 0, right = 2, sum = 7. minLen = 2
  // left = 1, right = 3, sum = 6
  // left = 1, right = 4, sum = 10. minLen = 3
  // left = 2, right = 5, sum = 10. minLen = 3
  // left = 3, right = 6, sum = 12. minLen = 4
  // right = 7, break while loop
  let left = 0;
  let right = 0;
  let sum = 0;
  let minLen = nums.length + 1;
  while (right < nums.length) {
    sum += nums[right];
    while (sum >= s) {
      minLen = Math.min(minLen, right - left + 1);
      sum -= nums[left];
      left += 1;
    }
    right += 1;
  }
  return minLen === nums.length + 1 ? 0 : minLen;
};

/**
 * #76 https://leetcode.cn/problems/minimum-window-substring/
 */
export const MinimumWindowSubstring = (s: string, t: string): string => {
  // s = "ADOBECODEBANC", t = "ABC"
  // left = 0, right = 0, need = {A: 0, B: 1, C: 1} , needType = 2. res = ''  A
  // left = 0, right = 1, need = {A: 0, B: 1, C: 1} , needType = 2. res = ''  D
  // left = 0, right = 2, need = {A: 0, B: 1, C: 1} , needType = 2. res = ''  O
  // left = 0, right = 3, need = {A: 0, B: 0, C: 1} , needType = 1. res = ''  B
  // left = 0, right = 4, need = {A: 0, B: 0, C: 1} , needType = 1. res = ''  E
  // left = 0, right = 5, need = {A: 0, B: 0, C: 0} , needType = 1. res = 'ADOBEC'  C
  // left = 1, right = 5, need = {A: 1, B: 0, C: 0} , needType = 1. res = 'ADOBEC'  remove A
  // left = 1, right = 6, need = {A: 1, B: 0, C: 0} , needType = 1. res = 'ADOBEC'  O
  // left = 1, right = 7, need = {A: 1, B: 0, C: 0} , needType = 1. res = 'ADOBEC'  D
  // left = 1, right = 8, need = {A: 1, B: 0, C: 0} , needType = 1. res = 'ADOBEC'  E
  // left = 1, right = 9, need = {A: 1, B: -1, C: 0} , needType = 1. res = 'ADOBEC'  B
  // left = 1, right = 10, need = {A: 0, B: -1, C: 0} , needType = 0. res = 'ADOBEC'  A
  // left = 2, right = 10, need = {A: 0, B: -1, C: 0} , needType = 0. res = 'ADOBEC'  remove D
  // left = 3, right = 10, need = {A: 0, B: -1, C: 0} , needType = 0. res = 'ADOBEC'  remove O
  // left = 4, right = 10, need = {A: 0, B: 0, C: 0} , needType = 0. res = 'ADOBEC'  remove B
  // left = 5, right = 10, need = {A: 0, B: 0, C: 0} , needType = 0. res = 'CODEB'  remove E
  // left = 6, right = 10, need = {A: 0, B: 0, C: 1} , needType = 1. res = 'CODEB'  remove C
  // left = 6, right = 11, need = {A: 0, B: 0, C: 1} , needType = 1. res = 'CODEB'  N
  // left = 6, right = 12, need = {A: 0, B: 0, C: 0} , needType = 0. res = 'CODEB'  C
  // left = 7, right = 12, need = {A: 0, B: 0, C: 0} , needType = 0. res = 'CODEB'  remove O
  // left = 8, right = 12, need = {A: 0, B: 0, C: 0} , needType = 0. res = 'CODEB'  remove D
  // left = 9, right = 12, need = {A: 0, B: 0, C: 0} , needType = 0. res = 'BANC'  remove E
  // left = 10, right = 12, need = {A: 0, B: 1, C: 0} , needType = 0. res = 'BANC'  remove B
  // left = 10, right = 13, break while loop

  let l = 0;
  let r = 0;
  const need = new Map<string, number>();
  for (const c of t) {
    need.set(c, need.has(c) ? need.get(c) + 1 : 1);
  }

  let needType = need.size;
  let res = '';

  while (r < s.length) {
    const c = s[r];
    if (need.has(c)) {
      need.set(c, need.get(c) - 1);
      if (need.get(c) === 0) {
        needType -= 1;
      }
    }

    while (needType === 0) {
      const newRes = s.substring(l, r + 1);
      if (!res || newRes.length < res.length) {
        res = newRes;
      }

      const c2 = s[l];
      if (need.has(c2)) {
        need.set(c2, need.get(c2) + 1);
        if (need.get(c2) === 1) needType += 1;
      }
      l += 1;
    }
    r += 1;
  }
  return res;
};
