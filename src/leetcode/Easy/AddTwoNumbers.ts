import { SinglyListNode } from '../LinkedList/SinglyListNode';

export const AddTwoNumbers = (l1: SinglyListNode<number>, l2: SinglyListNode<number>) => {
  const head = new SinglyListNode<number>(0);
  let current = head;
  let carry = 0;
  while (l1 || l2 || carry) {
    const sum = (l1?.value || 0) + (l2?.value || 0) + carry;
    carry = Math.floor(sum / 10);
    current.next = new SinglyListNode<number>(sum % 10);
    current = current.next;
    // eslint-disable-next-line no-param-reassign
    l1 = l1?.next;
    // eslint-disable-next-line no-param-reassign
    l2 = l2?.next;
  }
  return head.next;
};
