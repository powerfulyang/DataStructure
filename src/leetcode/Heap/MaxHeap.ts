import { Heap } from './index';

export class MaxHeap extends Heap {
  /**
   * Add an element to the heap.
   * @param element number
   */
  offer(element: number): void {
    this._heap.push(element);
    this.heapifyUp();
  }

  /**
   * Remove the largest element from the heap.
   */
  poll(): number {
    const result = this._heap[0];
    // 这里其实有一步
    // 将最后一个元素放到第一个元素的位置，然后再弹出最后一个元素
    // 维持 complete binary tree
    this._heap[0] = this._heap.pop();
    // 把堆顶元素移动下去
    this.heapifyDown();
    return result;
  }

  /**
   * Heapify the heap.
   * @private
   */
  protected heapifyUp(): void {
    // 添加元素之后，要重新排列
    let index = this._heap.length - 1;
    // First element skip, become the root node.
    /**
     * Second element
     * index = 1;
     * parentIndex = 0;
     * if parentValue < childValue, swap
     */
    /**
     * Third element
     * index = 2;
     * parentIndex = 1;
     * if parentValue < childValue, swap
     * index = parentIndex;
     * index = 1;
     * parentIndex = 0;
     * index = parentIndex; index = 0;
     * break;
     * etc...
     */
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      // complete binary tree is used
      // so parentIndex = Math.floor((index - 1) / 2);
      if (this._heap[index] > this._heap[parentIndex]) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  /**
   * Heapify the heap.
   * @private
   */
  protected heapifyDown(): void {
    // 因为 root 弹出，不知道左节点和右节点的哪个大，所以要重新排列
    let index = 0;
    /**
     * index = 0; root node.
     * 由于是满二叉树
     * 左右子节点的索引是 index * 2 + 1 和 index * 2 + 2
     */
    while (index < this._heap.length) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let childIndex = leftChildIndex;
      if (
        rightChildIndex < this._heap.length &&
        this._heap[rightChildIndex] > this._heap[leftChildIndex]
      ) {
        // 最大堆，取左右子节点中较大的
        childIndex = rightChildIndex;
      }
      if (this._heap[index] < this._heap[childIndex]) {
        // 比较父节点和子节点的值，如果父节点的值比子节点的值小，则交换
        // 因为是最大堆，所以父节点的值应该比子节点的值大
        this.swap(index, childIndex);
        index = childIndex; // 将子节点的索引赋值给循环的索引
      } else {
        break;
      }
    }
  }
}
