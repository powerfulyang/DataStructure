import type { SinglyListNode } from './SinglyListNode';

/**
 * #203, https://leetcode.cn/problems/remove-linked-list-elements/
 */
export const RemoveLinkedListElements = (
  head: SinglyListNode<number>,
  val: number,
): SinglyListNode<number> => {
  if (!head) {
    return null;
  }

  let node = head;
  while (node && node.value === val) {
    node = node.next;
  }

  if (!node) {
    return null;
  }

  return head;
};
