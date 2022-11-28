import { DoublyLinkedList } from '../LinkedList/DoublyLinkedList';

export class LRUCache {
  private readonly map = new Map();

  private readonly dl = new DoublyLinkedList();

  private readonly capacity;

  constructor(capacity: number) {
    this.capacity = capacity;
  }

  get(key: number): number {
    const r = this.map.get(key);
    if (r) {
      this.addToHead(key);
      return r;
    }
    return -1;
  }

  put(key: number, value: number): void {
    this.map.set(key, value);
    this.addToHead(key);
    if (this.map.size > this.capacity) {
      const tail = this.dl.getTail();
      this.dl.remove(tail);
      this.map.delete(tail.value);
    }
  }

  addToHead(key: number) {
    const searched = this.dl.search(key);
    if (searched) {
      this.dl.remove(searched);
    }
    this.dl.addToHead(key);
  }
}
