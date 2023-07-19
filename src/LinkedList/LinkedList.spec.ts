import { ListNode } from '@/LinkedList/ListNode';
import { reverseLinkedListRecursive } from '@/LinkedList/reverseLinkedList';
import { describe, expect, it } from '@jest/globals';

describe('LinkedList', () => {
  it('reverseLinkedListRecursive', () => {
    const head = new ListNode(1, new ListNode(2, new ListNode(3)));
    const newHead = reverseLinkedListRecursive(head);
    expect(newHead.val).toBe(3);
  });
});
