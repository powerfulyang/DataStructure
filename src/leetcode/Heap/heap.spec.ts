import { Heap } from './index';

describe('Heap', () => {
  it('Kth Largest Element in an Array', () => {
    const heap = new Heap();
    heap.offer(3);
    heap.offer(2);
    heap.offer(1);
    heap.offer(5);
    heap.offer(6);
    heap.offer(4);
    expect(heap.poll()).toBe(6);
    expect(heap.poll()).toBe(5);
    expect(heap.poll()).toBe(4);
    expect(heap.poll()).toBe(3);
    expect(heap.poll()).toBe(2);
    expect(heap.poll()).toBe(1);
  });
});
