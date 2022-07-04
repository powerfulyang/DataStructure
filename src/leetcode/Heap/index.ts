/**
 * Heap is array-based data structure.
 * It is a complete binary tree.
 * The root node is the largest element.
 */
export abstract class Heap {
  /**
   * The array that stores the heap.
   */
  protected _heap: number[] = [];

  /**
   * Get the largest element in the heap.
   */
  peek(): number {
    return this._heap[0];
  }

  size(): number {
    return this._heap.length;
  }

  isEmpty(): boolean {
    return this._heap.length === 0;
  }

  protected abstract heapifyUp(): void;

  protected abstract heapifyDown(): void;

  protected abstract offer(element: number): void;

  protected abstract poll(): number;

  protected swap(index1: number, index2: number): void {
    [this._heap[index1], this._heap[index2]] = [this._heap[index2], this._heap[index1]];
  }
}

// Online Algorithm (using heap)
// 针对一组流数据，没有固定长度，可以随时根据需求 scalable

// Offline Algorithm (using sorting)
// 针对一组固定长度的数据，每次 scale 后需要重新计算
