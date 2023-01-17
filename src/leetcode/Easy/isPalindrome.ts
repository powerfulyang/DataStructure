export class ListNode {
  val: number;

  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @description \#234 回文链表
 * @see https://leetcode.cn/problems/palindrome-linked-list-lcci/
 * @param head - 链表头节点
 */
export const isPalindrome = (head: ListNode) => {
  let node = head;
  // 用数组存储链表的值
  const values = [];
  while (node !== null) {
    values.push(node.val);
    node = node.next;
  }
  // 用双指针判断是否是回文
  for (let i = 0, j = values.length - 1; i < j; i++, j--) {
    if (values[i] !== values[j]) {
      return false;
    }
  }
  return true;
};
