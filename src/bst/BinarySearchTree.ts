import { TreeNode } from '@/TreeNode';

/**
 * Binary Search Tree
 * @description 二叉搜索树
 * 一个极端的例子是，当你连续插入排序后的数据（如：1, 2, 3, 4, 5...）到一个空的二叉搜索树，
 * 那么每一个新的数都会成为前一个数的右子节点，这个二叉搜索树就会退化成一个单链。
 * 反过来，如果你连续插入一个倒序的数据（如：5, 4, 3, 2, 1...），
 * 那么每一个新的数都会成为前一个数的左子节点，同样会退化成一个单链。
 *
 * 为了解决这种问题，有一种特殊的二叉搜索树叫做平衡二叉搜索树（Balanced Binary Search Tree，如 AVL 树、红黑树），
 * 可以在插入和删除元素时自动保持树的平衡，避免最坏情况下的退化。
 */
export class BinarySearchTree {
  root: TreeNode | null;

  constructor() {
    this.root = null;
  }

  insert(value: number) {
    const newNode = new TreeNode(value, null, null);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    // 能迭代就不要用递归
    while (true) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  search(value: number) {
    if (!this.root) return false;
    let currentNode = this.root;
    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      }
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }
}
