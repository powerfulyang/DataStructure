import { TreeNode } from './TreeNode';

export class Tree<T> {
  public root: TreeNode<T> | null = null;

  constructor(data?: T[]) {
    data?.length && this.reverseFromLevelOrderTraverse(data);
  }

  static maxValue(node: TreeNode<number> | null) {
    if (node === null) {
      return null;
    }
    const maxLeft = Tree.maxValue(node.left);
    const maxRight = Tree.maxValue(node.right);
    return Math.max(maxLeft, maxRight, node.val);
  }

  static pathSum(node: TreeNode<number> | null, sum: number): boolean {
    if (node === null) {
      return false;
    }
    if (node.val === sum && node.left === null && node.right === null) {
      return true;
    }
    return Tree.pathSum(node.left, sum - node.val) || Tree.pathSum(node.right, sum - node.val);
  }

  static isSameTree(p: TreeNode<number> | null, q: TreeNode<number> | null): boolean {
    if (p === null && q === null) {
      return true;
    }
    if (p === null || q === null) {
      return false;
    }
    return p.val === q.val && Tree.isSameTree(p.left, q.left) && Tree.isSameTree(p.right, q.right);
  }

  /**
   * BFS 广度优先
   * 还原一棵树
   * @param data
   */
  reverseFromLevelOrderTraverse(data: T[]) {
    const root = new TreeNode(data.shift());
    const queue = [root];
    while (queue.length > 0) {
      // subtree
      const node = queue.shift();
      const left = data.shift();
      const right = data.shift();
      node.left = left ? new TreeNode(left) : null;
      node.right = right ? new TreeNode(right) : null;
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    this.root = root;
  }

  /**
   * 广度优先
   * Breadth-First Traversal
   * BFS
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
   * 树的最小深度
   */
  public minDepth() {
    return this.minDepthNode(this.root);
  }

  /**
   * 是否是平衡二叉树
   */
  public isBalanced(): boolean {
    return this.isBalancedNode(this.root);
  }

  /**
   * 树的最大值
   */
  public max() {
    let max = this.root.val;
    this.levelOrderTraverse((data) => {
      if (data > max) {
        max = data;
      }
    });
    return max;
  }

  private minDepthNode(node: TreeNode<T> | null): number {
    if (node === null) {
      return 0;
    }
    if (node.left === null && node.right !== null) {
      return 1 + this.minDepthNode(node.right);
    }
    if (node.left !== null && node.right === null) {
      return 1 + this.minDepthNode(node.left);
    }
    const left = this.minDepthNode(node.left);
    const right = this.minDepthNode(node.right);
    return Math.min(left, right) + 1;
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
    const left = this.depthNode(node.left);
    const right = this.depthNode(node.right);
    return Math.max(left, right) + 1;
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
