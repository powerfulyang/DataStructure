/**
 * #347, https://leetcode.cn/problems/top-k-frequent-elements/
 */
export const TopKFrequentElements = (nums: number[], k: number) => {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }
  const array: number[][] = [];
  for (const [key, value] of map) {
    if (array[value]) {
      array[value].push(key);
    } else {
      array[value] = [key];
    }
  }
  let res: number[] = [];
  for (let i = array.length - 1; i >= 0 && res.length < k; i--) {
    if (array[i]) {
      res = res.concat(array[i]);
    }
  }
  return res;
};
