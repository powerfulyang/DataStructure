export class DListNode {
  key: number;

  value: number;

  prev: DListNode | null;

  next: DListNode | null;

  constructor(key: number, value: number) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}
