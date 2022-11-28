import { Tree } from './Tree';
import { TreeNode } from './TreeNode';

/**
 * For a BST, inorder traversal is the sorted order of the elements.
 * + Time complexity: O(n)
 * + Space complexity: O(n)
 * + left node < root node < right node
 */
export class BinarySearchTree<T> extends Tree<T> {
  constructor(data?: T[]) {
    super();
    data?.map((d) => this.insert(d));
  }

  /**
   * @description \#701, https://leetcode.cn/problems/insert-into-a-binary-search-tree/
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

  /**
   * @description \#450, https://leetcode-cn.com/problems/delete-node-in-a-bst/
   */
  remove(n: T): void {
    const removeNode = (node: TreeNode<T> | null, key: T): TreeNode<T> | null => {
      if (node === null) {
        return null;
      }
      if (key === node.val) {
        if (node.left === null) {
          return node.right;
        }
        if (node.right === null) {
          return node.left;
        }
        let tempNode = node.right;
        // 左右子树都存在，返回后继节点（右子树最左叶子 => 右子树的最小值）作为新的根节点
        // 后继节点的右子树作为新的右子树
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        // eslint-disable-next-line no-param-reassign
        node.val = tempNode.val;
        // eslint-disable-next-line no-param-reassign
        node.right = removeNode(node.right, tempNode.val);
        return node;
      }
      if (key < node.val) {
        // eslint-disable-next-line no-param-reassign
        node.left = removeNode(node.left, key);
        return node;
      }
      // eslint-disable-next-line no-param-reassign
      node.right = removeNode(node.right, key);
      return node;
    };
    this.root = removeNode(this.root, n);
  }
}
