import { SinglyListNode } from './SinglyListNode';

export class SinglyLinkedList<T> {
  public head: SinglyListNode<T> = null;

  constructor(v: T[]) {
    let node = this.head;
    v.forEach((item) => {
      if (!node) {
        node = new SinglyListNode(item);
      } else {
        node.next = new SinglyListNode(item);
      }
    });
  }
}
