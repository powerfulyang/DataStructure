import type { ListNode } from '@/LinkedList/ListNode';

export const reverse_linked_list_recursively = (head: ListNode) => {
  // base case
  if (head.next === null) {
    return head;
  }
  const newHead = reverse_linked_list_recursively(head.next);
  newHead.next.next = head;
  newHead.next = null;
  return newHead;
};

export const reverse_linked_list_iteratively = (head: ListNode) => {
  let current = head;
  let prev = null;
  while (current !== null) {
    const { next } = current;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};
