import { TreeNode } from './TreeNode';

/**
 * Full Binary Tree 节点个数是奇数
 * 满二叉树，真二叉树
 * #894, https://leetcode.cn/problems/all-possible-full-binary-trees/
 */
export const AllPossibleFullBinaryTrees = (n: number) => {
  const result = [];
  if (n % 2 === 0) {
    return result;
  }
  if (n === 1) {
    result.push(new TreeNode(0));
    return result;
  }
  for (let i = 1; i < n; i += 2) {
    const left = AllPossibleFullBinaryTrees(i); // 左子树
    const right = AllPossibleFullBinaryTrees(n - i - 1); // 右子树
    left.forEach((l) => {
      right.forEach((r) => {
        const head = new TreeNode(0);
        head.left = l;
        head.right = r;
        result.push(head);
      });
    });
  }
  return result;
};
