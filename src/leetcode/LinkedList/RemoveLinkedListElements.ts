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
  while (node.next) {
    if (node.next.value === val) {
      node.next = node.next.next;
    }
    node = node.next;
  }

  return head;
};
