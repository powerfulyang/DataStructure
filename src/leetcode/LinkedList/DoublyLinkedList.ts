import { DoublyListNode } from './DoublyListNode';

export class DoublyLinkedList {
  public head: DoublyListNode<number> = null;

  constructor(v: number[]) {
    let node = this.head;
    v.forEach((item) => {
      if (!node) {
        node = new DoublyListNode(item);
      } else {
        node.next = new DoublyListNode(item);
        node.next.prev = node;
        node = node.next;
      }
    });
  }
}
