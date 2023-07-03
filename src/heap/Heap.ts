/**
 * @summary 最小堆
 */
export class Heap {
  private _heap: number[] = [];

  push(item: number) {
    this._heap.push(item);
    this.bubbleUp(this._heap.length - 1);
  }

  private bubbleUp(idx: number) {
    if (idx > 0) {
      // 和 parent node 比, index = (i - 1) / 2
      const parentIndex = Math.floor((idx - 1) / 2);
      if (this._heap[idx] < this._heap[parentIndex]) {
        // swap
        [this._heap[parentIndex], this._heap[idx]] = [this._heap[idx], this._heap[parentIndex]];
        this.bubbleUp(parentIndex);
      }
    }
  }

  pop() {
    // 最小值在根节点
    const result = this._heap[0];
    // 将最后一个节点放到根节点
    this._heap[0] = this._heap.pop();
    // 从根节点开始向下冒泡
    this.bubbleDown();
    return result;
  }

  private bubbleDown() {
    let index = 0;
    while (index < this._heap.length) {
      const leftChildIndex = index * 2 + 1;
      const rightChildIndex = index * 2 + 2;
      // 首先假设左子节点是最小的子节点
      let minChildIndex = leftChildIndex;
      if (
        rightChildIndex < this._heap.length &&
        this._heap[rightChildIndex] < this._heap[leftChildIndex]
      ) {
        // 如果右子节点存在且值比左子节点小，则最小子节点实际上是右子节点。
        minChildIndex = rightChildIndex;
      }
      if (this._heap[index] > this._heap[minChildIndex]) {
        // 如果当前节点的值大于最小子节点的值，则交换这两个节点的值，并将index更新为最小子节点的索引，继续进行下一轮的下沉操作。
        [this._heap[index], this._heap[minChildIndex]] = [
          this._heap[minChildIndex],
          this._heap[index],
        ];
        index = minChildIndex;
      } else {
        // 如果当前节点的值不大于最小子节点的值，表示当前节点已经满足堆的性质，下沉操作结束。
        break;
      }
    }
  }
}
