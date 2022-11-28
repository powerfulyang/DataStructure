import { DoublyListNode } from './DoublyListNode';

export class DoublyLinkedList {
  public head: DoublyListNode<number> = null;

  constructor(v?: number[]) {
    let node = null;
    v?.forEach((item) => {
      if (this.head === null) {
        this.head = new DoublyListNode(item);
        node = this.head;
      } else {
        this.insertAfter(node, item);
        node = node.next;
      }
    });
  }

  insertAfter(node: DoublyListNode<number>, value: number) {
    const newNode = new DoublyListNode(value);
    newNode.next = node.next;
    newNode.prev = node;
    // eslint-disable-next-line no-param-reassign
    node.next = newNode;
  }

  addToHead(value: number) {
    const { head } = this;
    const newHead = new DoublyListNode(value);
    newHead.next = head;
    if (head) {
      head.prev = newHead;
    }
    this.head = newHead;
  }

  getTail() {
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    return tail;
  }

  remove(node: DoublyListNode<number>) {
    if (node.prev) {
      // eslint-disable-next-line no-param-reassign
      node.prev.next = node.next;
    } else {
      this.head = node.next;
    }

    if (node.next) {
      // eslint-disable-next-line no-param-reassign
      node.next.prev = node.prev;
    }
  }

  search(value: number) {
    let node = this.head;
    while (node) {
      if (node.value === value) {
        return node;
      }
      node = node.next;
    }
    return null;
  }
}
