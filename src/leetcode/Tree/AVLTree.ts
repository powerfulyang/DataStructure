import { Tree } from './Tree';
import type { TreeNode } from './TreeNode';

export class AVLTree<T> extends Tree<T> {
  constructor(data: T[]) {
    super(data);
    this.balance(this.root);
  }

  insert(data: T) {
    super.insert(data);
    this.balance(this.root);
  }

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
    } else {
      this.balance(node.left);
      this.balance(node.right);
    }
  }

  private rotateLeft(node: TreeNode<T>): void {
    const { right } = node;
    // eslint-disable-next-line no-param-reassign
    node.right = right.left;
    right.left = node;
    this.root = right;
  }

  private rotateRight(node: TreeNode<T>): void {
    const { left } = node;
    // eslint-disable-next-line no-param-reassign
    node.left = left.right;
    left.right = node;
    this.root = left;
  }

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
