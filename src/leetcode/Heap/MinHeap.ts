import { Heap } from './index';

export class MinHeap extends Heap {
  offer(element: number) {
    this._heap.push(element);
    this.heapifyUp();
  }

  poll() {
    const result = this._heap[0];
    this._heap[0] = this._heap.pop();
    this.heapifyDown();
    return result;
  }

  protected heapifyUp() {
    let index = this._heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this._heap[index] < this._heap[parentIndex]) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  protected heapifyDown() {
    let index = 0;
    while (index < this._heap.length) {
      const leftChildIndex = index * 2 + 1;
      const rightChildIndex = index * 2 + 2;
      let minChildIndex = leftChildIndex;
      if (
        rightChildIndex < this._heap.length &&
        this._heap[rightChildIndex] < this._heap[leftChildIndex]
      ) {
        minChildIndex = rightChildIndex;
      }
      if (this._heap[index] > this._heap[minChildIndex]) {
        this.swap(index, minChildIndex);
        index = minChildIndex;
      } else {
        break;
      }
    }
  }
}
