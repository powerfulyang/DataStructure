import { ListNode } from '@/LinkedList/ListNode';
import { hasCycle, hasCycle2 } from '@/two_pointers/hasCycle';
import { expect, test } from '@jest/globals';

test('has Cycle', () => {
  const head = new ListNode(1);
  head.next = new ListNode(2);
  head.next.next = new ListNode(3);
  head.next.next.next = head.next;
  const result = hasCycle(head);
  expect(result).toBe(true);
  const result2 = hasCycle2(head);
  expect(result2).toBe(true);
});
