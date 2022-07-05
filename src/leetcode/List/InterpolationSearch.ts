/**
 * 插值查找的高效性只针对均匀分布的数组，而对于分布不均匀的数组，插值查找便不再适用了。
 * @param array - number[]
 * @param target - number
 * @constructor
 */
export const InterpolationSearch = (array: number[], target: number) => {
  let low = 0;
  let high = array.length - 1;
  while (low <= high) {
    const mid =
      low + Math.floor(((target - array[low]) / (array[high] - array[low])) * (high - low));
    if (array[mid] === target) {
      return mid;
    }
    if (array[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
};
