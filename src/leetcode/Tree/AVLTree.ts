import type { TreeNode } from './TreeNode';
import { BinarySearchTree } from './BinarySearchTree';

/**
 * 自平衡二叉搜索树
 */
export class AVLTree<T> extends BinarySearchTree<T> {
  insert(data: T) {
    super.insert(data);
    this.balance(this.root);
  }

  /**
   * @description 每次只会涉及三个节点
   * @param node
   * @private
   */
  private balance(node: TreeNode<T> | null): void {
    if (node === null) {
      return;
    }
    const balance = this.getBalance(node);
    if (balance > 1) {
      if (this.getBalance(node.left) < 0) {
        this.rotateLeft(node.left);
      }
      this.rotateRight(node);
    } else if (balance < -1) {
      if (this.getBalance(node.right) > 0) {
        this.rotateRight(node.right);
      }
      this.rotateLeft(node);
    }
    this.balance(node.left);
    this.balance(node.right);
  }

  private rotateLeft(draft: TreeNode<T>): void {
    const { right } = draft;
    draft.right = right.left;
    right.left = draft;
    this.root = right;
  }

  private rotateRight(draft: TreeNode<T>): void {
    const { left } = draft;
    draft.left = left.right;
    left.right = draft;
    this.root = left;
  }

  /**
   * @returns positive if left is higher, negative if right is higher, 0 if equal
   */
  private getBalance(node: TreeNode<T>): number {
    if (node === null) {
      return 0;
    }
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  private getHeight(node: TreeNode<T> | null): number {
    if (node === null) {
      return 0;
    }
    return Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
  }
}
