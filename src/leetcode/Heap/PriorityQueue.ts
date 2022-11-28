export class PriorityQueue {
  private readonly queue: [number, number][];

  constructor() {
    this.queue = [];
  }

  /**
   * @description enqueue
   * @param item - item
   * @param weight - weight
   */
  enqueue(item: number, weight: number) {
    this.queue.push([item, weight]);
    this.queue.sort((a, b) => a[1] - b[1]);
  }

  /**
   * @description dequeue
   */
  dequeue() {
    const t = this.queue.shift();
    return t ? t[0] : -1;
  }

  /**
   * @description isEmpty
   */
  isEmpty() {
    return this.queue.length === 0;
  }
}
