import type { ListNode } from '@/LinkedList/ListNode';

/**
 * 链表是否有环，O(n) 时间复杂度，O(1) 空间复杂度
 */
export function hasCycle(head: ListNode | null): boolean {
  if (head === null || head.next === null) {
    return false;
  }

  let slow: ListNode | null = head;
  let fast: ListNode | null = head.next;

  // 在这个解决方案中，我们初始化两个指针，一个慢指针（slow）和一个快指针（fast）。
  // 慢指针每次移动一个节点，而快指针每次移动两个节点。
  //
  // 如果链表中存在循环，快指针最终会追上慢指针（即它们会在某个节点上相遇）。
  // 如果链表中不存在循环，快指针将会首先到达尾部（null），并且函数将返回 false。
  while (slow !== fast) {
    if (fast === null || fast.next === null) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  }

  return true;
}

/**
 * 链表是否有环，O(n) 时间复杂度，O(n) 空间复杂度
 */
export function hasCycle2(head: ListNode | null): boolean {
  // 1. 用 Set 存储已经遍历过的节点
  // 2. 遍历链表，如果当前节点已经在 Set 中，则说明有环
  // 3. 如果当前节点不在 Set 中，则将当前节点存入 Set，继续遍历
  const set = new Set<ListNode>();
  while (head !== null) {
    if (set.has(head)) {
      return true;
    }
    set.add(head);
    head = head.next;
  }
  return false;
}
