export class ListNode {
  val: number;

  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @see https://leetcode.cn/problems/palindrome-linked-list-lcci/
 * @param head - 链表头节点
 */
export const isPalindrome = (head: ListNode) => {
  let node = head;
  const values = [];
  while (node !== null) {
    values.push(node.val);
    node = node.next;
  }
  for (let i = 0, j = values.length - 1; i < j; ++i, --j) {
    if (values[i] !== values[j]) {
      return false;
    }
  }
  return true;
};
