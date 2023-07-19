import type { ListNode } from '@/LinkedList/ListNode';

export const reverseLinkedListIterative = (head: ListNode) => {
  // iterative
  let current = head;
  let prev = null;

  while (current) {
    const { next } = current;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};

export const reverseLinkedListRecursive = (head: ListNode) => {
  // base case
  if (head === null || head.next === null) {
    return head;
  }
  const newHead = reverseLinkedListRecursive(head.next);
  // head: 1 -> 2 -> 3 -> null
  // step:
  // newHead: 3 -> null; head: 2 -> 3 -> null
  // newHead: 3 -> 2 -> null; head: 1 -> 2 -> null
  head.next.next = head;
  head.next = null;
  return newHead;
};
