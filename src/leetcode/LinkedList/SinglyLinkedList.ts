import { SinglyListNode } from './SinglyListNode';

export class SinglyLinkedList<T> {
  public head: SinglyListNode<T> = null;

  constructor(v: T[]) {
    let node = null;
    v.forEach((item) => {
      if (!this.head) {
        this.head = new SinglyListNode(item);
        node = this.head;
      } else {
        node.next = new SinglyListNode(item);
        node = node.next;
      }
    });
  }
}
