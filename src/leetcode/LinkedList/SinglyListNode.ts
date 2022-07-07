export class SinglyListNode<T> {
  value: T;

  next: SinglyListNode<T> | null;

  constructor(val: T, next?: SinglyListNode<T>) {
    this.value = val;
    this.next = next || null;
  }
}
