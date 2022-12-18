import { CountingSort } from './CountingSort';

export const BucketSort = (nums: number[], bucketSize: number = 5) => {
  const arr = nums;
  if (arr.length <= 1) {
    return arr;
  }

  let minValue = arr[0];
  let maxValue = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i]; // 输入数据的最小值
    } else if (arr[i] > maxValue) {
      maxValue = arr[i]; // 输入数据的最大值
    }
  }

  // 桶的初始化
  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  const buckets = new Array(bucketCount);

  // 利用映射函数将数据分配到各个桶中
  for (let i = 0; i < arr.length; i++) {
    const bucketIndex = Math.floor((arr[i] - minValue) / bucketSize);
    if (buckets[bucketIndex] === undefined) {
      buckets[bucketIndex] = [];
    }
    buckets[bucketIndex].push(arr[i]);
  }

  arr.length = 0;
  for (let i = 0; i < buckets.length; i++) {
    const sorted = CountingSort(buckets[i]);
    arr.push(...sorted);
  }

  return arr;
};
