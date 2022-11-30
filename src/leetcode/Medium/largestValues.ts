import type { TreeNode } from '../Tree/TreeNode';

/**
 * @description \#515 在每个树行中找最大值
 * @see {@link https://leetcode-cn.com/problems/find-largest-value-in-each-tree-row/}
 * @param root - 树根节点
 * @author powerfulyang
 */
export const largestValues = (root: TreeNode | null): number[] => {
  if (!root) return [];
  const res: number[] = [];
  const queue: TreeNode[] = [root];
  while (queue.length) {
    let max = Number.MIN_SAFE_INTEGER;
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      max = Math.max(max, node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    res.push(max);
  }
  return res;
};
