import type { TreeNode } from '../Tree/TreeNode';

/**
 * #剑指 Offer II 056. 二叉搜索树中两个节点之和
 * https://leetcode.cn/problems/opLdQZ/
 */
export function binarySearchTreeFindTarget(root: TreeNode | null, k: number): boolean {
  const helperMap = new Map<number, number>();
  // 中序遍历
  const helperStack: TreeNode[] = [];
  let current = root;
  while (helperStack.length || current) {
    if (current) {
      helperStack.push(current);
      current = current.left;
    } else {
      current = helperStack.pop();
      if (helperMap.get(k - current.val) !== undefined) {
        return true;
      }
      helperMap.set(current.val, current.val);
      current = current.right;
    }
  }
  return false;
}
