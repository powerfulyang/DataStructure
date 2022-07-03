import { Tree } from './Tree';
import { TreeNode } from './TreeNode';

// For a BST, inorder traversal is the sorted order of the elements.
export class BinarySearchTree<T> extends Tree<T> {
  /**
   * inset a node to the tree
   * BST, Binary Search Tree
   * @param data
   */
  public insert(data: T): void {
    const node = new TreeNode<T>(data);
    if (this.root === null) {
      this.root = node;
    } else {
      let current = this.root;
      for (;;) {
        if (data < current.val) {
          if (current.left === null) {
            current.left = node;
            break;
          } else {
            current = current.left;
          }
        } else if (current.right === null) {
          current.right = node;
          break;
        } else {
          current = current.right;
        }
      }
    }
  }
}
