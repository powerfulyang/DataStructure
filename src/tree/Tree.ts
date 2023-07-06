import { Stack } from '@/leetcode/Stack/Stack';
import type { TreeNode } from '@/tree/TreeNode';

export class Tree {
  constructor(public root: TreeNode | null = null) {
    this.root = root;
  }

  // 前序遍历
  preOrderTraverseIterate() {
    const stack = new Stack<TreeNode>();
    stack.push(this.root);
    const ans: number[] = [];

    while (!stack.isEmpty()) {
      const current = stack.pop();
      ans.push(current.value);
      if (current.right) {
        stack.push(current.right);
      }
      if (current.left) {
        stack.push(current.left);
      }
    }

    return ans;
  }
}
