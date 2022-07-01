import { TreeNode } from './TreeNode';

export class Tree<T> {
  public root: TreeNode<T> | null = null;

  constructor(data: T[]) {
    data.forEach((d) => this.insert(d));
  }

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
   * 广度优先
   */
  public levelOrderTraverse(callback: (data: T) => void): void {
    const queue = [this.root];
    while (queue.length > 0) {
      const node = queue.shift();
      if (node !== null) {
        callback(node.val);
        queue.push(node.left);
        queue.push(node.right);
      }
    }
  }

  /**
   * 深度优先
   * 前序递归遍历
   * Pre-Order Traversal
   * 先访问根节点，再访问子树
   */
  public preOrderTraverse(callback: (data: T) => void): void {
    this.preOrderTraverseNode(this.root, callback);
  }

  /**
   * 深度优先
   * 中序递归遍历
   * In-Order Traversal
   * 先访问左（右）子树，再访问根节点，最后访问右（左）子树
   */
  public inOrderTraverse(callback: (data: T) => void): void {
    this.inOrderTraverseNode(this.root, callback);
  }

  /**
   * 深度优先
   * 后序递归遍历
   * Post-Order Traversal
   * 先访问子树，再访问根节点
   */
  public postOrderTraverse(callback: (data: T) => void): void {
    this.postOrderTraverseNode(this.root, callback);
  }

  /**
   * 树的深度
   */
  public depth(): number {
    return this.depthNode(this.root);
  }

  /**
   * 是否是平衡二叉树
   */
  public isBalanced(): boolean {
    return this.isBalancedNode(this.root);
  }

  balanceTree() {
    // todo
  }

  private postOrderTraverseNode(node: TreeNode<T> | null, callback: (data: T) => void): void {
    if (node === null) {
      return;
    }
    this.postOrderTraverseNode(node.left, callback);
    this.postOrderTraverseNode(node.right, callback);
    callback(node.val);
  }

  private preOrderTraverseNode(node: TreeNode<T> | null, callback: (data: T) => void): void {
    if (node === null) {
      return;
    }
    callback(node.val);
    this.preOrderTraverseNode(node.left, callback);
    this.preOrderTraverseNode(node.right, callback);
  }

  private inOrderTraverseNode(node: TreeNode<T> | null, callback: (data: T) => void): void {
    if (node === null) {
      return;
    }
    this.inOrderTraverseNode(node.left, callback);
    callback(node.val);
    this.inOrderTraverseNode(node.right, callback);
  }

  private depthNode(node: TreeNode<T> | null): number {
    if (node === null) {
      return 0;
    }
    return Math.max(this.depthNode(node.left), this.depthNode(node.right)) + 1;
  }

  private isBalancedNode(node: TreeNode<T> | null): boolean {
    if (node === null) {
      return true;
    }
    const left = this.depthNode(node.left);
    const right = this.depthNode(node.right);
    return (
      Math.abs(left - right) <= 1 &&
      this.isBalancedNode(node.left) &&
      this.isBalancedNode(node.right)
    );
  }
}
