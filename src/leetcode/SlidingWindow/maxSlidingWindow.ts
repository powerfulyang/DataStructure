/** 单调递减队列，FIFO */
class MonoQueue {
  private readonly queue: number[];

  constructor() {
    this.queue = [];
  }

  /** 入队：value 如果大于队尾元素，则将队尾元素删除，直至队尾元素大于value，或者队列为空 */
  public enqueue(value: number): void {
    let bottom = this.bottom();
    while (bottom !== undefined && bottom < value) {
      this.queue.pop();
      bottom = this.bottom();
    }
    this.queue.push(value);
  }

  /** 出队：只有当队首元素等于 value，才出队 */
  public dequeue(value: number): void {
    const top = this.top();
    if (top !== undefined && top === value) {
      this.queue.shift();
    }
  }

  /**
   * 队首元素，即最大值
   */
  public top() {
    return this.queue[0];
  }

  /**
   * 队尾元素，即最小值
   */
  public bottom() {
    return this.queue[this.queue.length - 1];
  }
}

/**
 * #239, https://leetcode.cn/problems/sliding-window-maximum/
 */
export const maxSlidingWindow = (nums: number[], k: number) => {
  // nums = [1, 3, -1, -3, 5, 3, 6, 7]
  // k = 3
  const helperQueue = new MonoQueue();
  let i: number = 0;
  let j: number = 0;
  const resArr: number[] = [];
  // get k - 1 elements
  while (j < k) {
    helperQueue.enqueue(nums[j++]);
    // helperQueue = [3, -1]
  }
  // get the max element, and move the window
  resArr.push(helperQueue.top());
  while (j < nums.length) {
    // enqueue the next element, and dequeue the first element
    helperQueue.enqueue(nums[j]);
    helperQueue.dequeue(nums[i]);
    // helperQueue = [3, -1, -3]
    // helperQueue = [5]
    // helperQueue = [5, 3]
    // helperQueue = [6]
    // helperQueue = [7]
    resArr.push(helperQueue.top());
    j++;
    i++;
  }
  return resArr;
};
