import { DListNode } from '@/LinkedList/DListNode';

export class LRUCache {
  private size: number;

  private readonly capacity: number;

  private cache: Map<number, DListNode>;

  private readonly head: DListNode;

  private readonly tail: DListNode;

  constructor(capacity: number) {
    this.size = 0;
    this.capacity = capacity;
    this.cache = new Map();
    this.head = new DListNode(0, 0);
    this.tail = new DListNode(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key: number): number {
    const node = this.cache.get(key);
    if (!node) return -1;

    // Move the accessed node to the head;
    this.moveToHead(node);
    return node.value;
  }

  put(key: number, value: number): void {
    const node = this.cache.get(key);

    if (!node) {
      const newNode = new DListNode(key, value);
      this.cache.set(key, newNode);
      this.addNode(newNode);
      this.size++;

      if (this.size > this.capacity) {
        // Pop the tail
        const tail = this.popTail();
        this.cache.delete(tail.key);
        this.size--;
      }
    } else {
      // Update the value.
      node.value = value;
      this.moveToHead(node);
    }
  }

  private addNode(node: DListNode): void {
    // Always add the new node right after head.
    node.prev = this.head;
    node.next = this.head.next;

    this.head.next.prev = node;
    this.head.next = node;
  }

  private removeNode(node: DListNode): void {
    // Remove an existing node from the linked list.
    const { prev } = node;
    const { next } = node;

    prev.next = next;
    next.prev = prev;
  }

  private moveToHead(node: DListNode): void {
    // Move certain node in between to the head.
    this.removeNode(node);
    this.addNode(node);
  }

  private popTail(): DListNode {
    // Pop the current tail.
    const res = this.tail.prev;
    this.removeNode(res);
    return res;
  }
}
