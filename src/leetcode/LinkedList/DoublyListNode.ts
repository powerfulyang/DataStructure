import { SinglyListNode } from './SinglyListNode';

export class DoublyListNode<T> extends SinglyListNode<T> {
  public prev: DoublyListNode<T> | null;

  public next: DoublyListNode<T> | null;

  constructor(val: T, next?: DoublyListNode<T>, prev?: DoublyListNode<T>) {
    super(val, next);
    this.prev = prev || null;
    this.next = next || null;
  }
}
