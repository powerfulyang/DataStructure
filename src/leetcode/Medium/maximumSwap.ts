function swap(array: string[], index1: number, index2: number) {
  // eslint-disable-next-line no-param-reassign
  [array[index1], array[index2]] = [array[index2], array[index1]];
}

/**
 * @description Given a non-negative integer, you could swap two digits at most once to get the maximum valued number.
 * @description 利用贪心法则，尝试将数字中右边较大的数字与左边较小的数字进行交换，这样即可保证得到的整数值最大
 * @description \#670, https://leetcode.cn/problems/maximum-swap/
 */
export const maximumSwap = (num: number) => {
  const charArray = [...`${num}`];
  const n = charArray.length;
  let maxIdx = n - 1;
  let idx1 = -1;
  let idx2 = -1;
  for (let i = n - 1; i >= 0; i--) {
    if (charArray[i] > charArray[maxIdx]) {
      maxIdx = i;
    } else if (charArray[i] < charArray[maxIdx]) {
      idx1 = i;
      idx2 = maxIdx;
    }
  }
  if (idx1 >= 0) {
    swap(charArray, idx1, idx2);
    return parseInt(charArray.join(''), 10);
  }
  return num;
};
