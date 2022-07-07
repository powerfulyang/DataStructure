import type { SinglyListNode } from './SinglyListNode';

/**
 *  Recursive solution
 */
export const recursiveReverse = (linkedList: SinglyListNode<number>) => {
  const head = linkedList;
  if (head.next === null) return linkedList;
  const newHead = recursiveReverse(linkedList.next);
  head.next.next = linkedList;
  head.next = null;
  return newHead;
};

/**
 * Two-pointer solution
 */
export const twoPointerReverse = (linkedList: SinglyListNode<number>) => {
  let prev = null;
  let curr = linkedList;
  let next = null;
  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};
