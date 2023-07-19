export class KthLargest {
  constructor(private readonly k: number, private readonly nums: number[]) {
    this.nums = nums.sort((a, b) => b - a);
    this.k = k;
  }

  add(val: number): number {
    let left = 0;
    let right = this.nums.length;

    while (left < right) {
      const mid = (left + right) >> 1;
      if (this.nums[mid] > val) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    this.nums.splice(left, 0, val);
    return this.nums[this.k - 1];
  }
}
