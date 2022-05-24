/**
 * Heap is array-based data structure.
 * It is a complete binary tree.
 * The root node is the largest element.
 */
export class Heap {
  /**
   * The array that stores the heap.
   */
  private _heap: number[] = [];

  offer(num: number): void {
    this._heap.push(num);
    this.heapifyUp();
  }

  poll(): number {
    const result = this._heap[0];
    this._heap[0] = this._heap.pop();
    this.heapifyDown();
    return result;
  }

  peek(): number {
    return this._heap[0];
  }

  size(): number {
    return this._heap.length;
  }

  isEmpty(): boolean {
    return this._heap.length === 0;
  }

  private heapifyUp(): void {
    let index = this._heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this._heap[index] > this._heap[parentIndex]) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  private heapifyDown(): void {
    let index = 0;
    while (index < this._heap.length) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let childIndex = leftChildIndex;
      if (
        rightChildIndex < this._heap.length &&
        this._heap[rightChildIndex] > this._heap[leftChildIndex]
      ) {
        childIndex = rightChildIndex;
      }
      if (this._heap[index] < this._heap[childIndex]) {
        this.swap(index, childIndex);
        index = childIndex;
      } else {
        break;
      }
    }
  }

  private swap(index1: number, index2: number): void {
    const temp = this._heap[index1];
    this._heap[index1] = this._heap[index2];
    this._heap[index2] = temp;
  }
}

// Online Algorithm (using heap)
// 针对一组流数据，没有固定长度，可以随时根据需求 scalable

// Offline Algorithm (using sorting)
// 针对一组固定长度的数据，每次 scale 后需要重新计算
