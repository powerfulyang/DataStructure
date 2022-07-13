import { SinglyListNode } from './SinglyListNode';

/**
 * #24, https://leetcode.cn/problems/swap-nodes-in-pairs/
 */
export const SwapPairs = (head: SinglyListNode<number> | null) => {
  const dummyHead = new SinglyListNode(0, head); // 虚拟头节点
  let cur = dummyHead;
  while (cur.next !== null && cur.next.next !== null) {
    const tmp = cur.next;
    const tmp1 = cur.next.next.next;

    cur.next = cur.next.next; // step 1
    cur.next.next = tmp; // step 2
    cur.next.next.next = tmp1; // step 3

    cur = cur.next.next;
  }
  return dummyHead.next;
};
