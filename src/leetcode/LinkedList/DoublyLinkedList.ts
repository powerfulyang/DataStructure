import { DoublyListNode } from './DoublyListNode';

export class DoublyLinkedList {
  public head: DoublyListNode<number> = null;

  constructor(v: number[]) {
    let node = null;
    v.forEach((item) => {
      if (!this.head) {
        this.head = new DoublyListNode(item);
        node = this.head;
      } else {
        node.next = new DoublyListNode(item);
        node.next.prev = node;
        node = node.next;
      }
    });
  }
}
