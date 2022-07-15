import { CountingSort } from './CountingSort';

export const BucketSort = (nums: number[], bucketSize: number = 5) => {
  let arr = nums;
  if (arr.length === 0) {
    return arr;
  }

  let i;
  let minValue = arr[0];
  let maxValue = arr[0];
  for (i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i]; // 输入数据的最小值
    } else if (arr[i] > maxValue) {
      maxValue = arr[i]; // 输入数据的最大值
    }
  }

  // 桶的初始化
  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  const buckets = new Array(bucketCount).fill(null).map(() => []);

  // 利用映射函数将数据分配到各个桶中
  for (i = 0; i < arr.length; i++) {
    buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i]);
  }

  arr.length = 0;
  for (i = 0; i < buckets.length; i++) {
    const sorted = CountingSort(buckets[i]);
    arr = arr.concat(sorted);
  }

  return arr;
};
