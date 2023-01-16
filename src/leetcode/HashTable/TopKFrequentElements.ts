/**
 * @description \#347, https://leetcode.cn/problems/top-k-frequent-elements/
 */
export const topKFrequent = (nums: number[], k: number) => {
  // 1. 统计频率
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }
  // Map key order is guaranteed to be insertion order
  // other way to sort map is to use Array.from(map).sort((a, b) => b[1] - a[1])
  // const sortedMap = Array.from(map).sort((a, b) => b[1] - a[1]);
  // return sortedMap.slice(0, k).map((item) => item[0]);
  // 2. 按频率排序, counting sort
  const array: number[][] = [];
  for (const [key, value] of map) {
    if (array[value]) {
      // use array to collect the same frequency
      array[value].push(key);
    } else {
      array[value] = [key];
    }
  }
  // 3. 取出前k个, 从后往前取
  const res: number[] = [];
  for (let i = array.length - 1; i >= 0 && res.length < k; i--) {
    const items = array[i] || [];
    for (let j = 0; j < items.length && res.length < k; j++) {
      res.push(array[i][j]);
    }
  }
  return res;
};
