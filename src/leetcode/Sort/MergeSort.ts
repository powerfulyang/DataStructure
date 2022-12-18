function merge(a, b) {
  const result = [];
  while (a.length > 0 && b.length > 0) result.push(a[0] < b[0] ? a.shift() : b.shift());
  return result.concat(a.length ? a : b);
}
export const MergeSort = (arr: number[]): number[] => {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(MergeSort(left), MergeSort(right));
};
