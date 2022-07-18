import { Tree } from './Tree';
import type { TreeNode } from './TreeNode';

/**
 * 可以用数组来实现
 */
export class CompleteBinaryTree<T> extends Tree<T> {
  constructor(data: T[]) {
    if (data.every((item) => item !== null)) {
      super(data);
    } else {
      throw new Error('data must be all not null');
    }
  }

  static maxDepthNode<T>(node: TreeNode<T>): number {
    let depth = 0;
    let l = node;
    while (l != null) {
      depth++;
      l = l.left;
    }
    return depth;
  }

  static minDepthNode<T>(node: TreeNode<T>): number {
    let depth = 0;
    let r = node;
    while (r != null) {
      depth++;
      r = r.right;
    }
    return depth;
  }

  private static countNodes<T>(node: TreeNode<T>): number {
    if (node === null) return 0;
    const left = CompleteBinaryTree.maxDepthNode(node);
    const right = CompleteBinaryTree.minDepthNode(node);

    if (left === right) {
      return 2 ** left - 1;
    }

    return 1 + CompleteBinaryTree.countNodes(node.left) + CompleteBinaryTree.countNodes(node.right);
  }

  /**
   * #222, https://leetcode.cn/problems/count-complete-tree-nodes/
   */
  countNodes() {
    return CompleteBinaryTree.countNodes(this.root);
  }

  maxDepth() {
    return CompleteBinaryTree.maxDepthNode(this.root);
  }

  minDepth() {
    return CompleteBinaryTree.minDepthNode(this.root);
  }
}
