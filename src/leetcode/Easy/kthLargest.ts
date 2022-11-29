import type { TreeNode } from '../Tree/TreeNode';

/**
 * @description 二叉搜索树的第k大节点
 * @see https://leetcode.cn/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/
 */
export const KthLargest = (root: TreeNode | null, k: number): number => {
  let result = 0;
  const dfs = (node: TreeNode | null) => {
    if (node === null) return;
    dfs(node.right);
    if (k === 0) return;
    // eslint-disable-next-line no-param-reassign
    k--;
    if (k === 0) {
      result = node.val;
    }
    dfs(node.left);
  };
  dfs(root);
  return result;
};
