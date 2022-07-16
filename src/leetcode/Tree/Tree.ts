import { TreeNode } from './TreeNode';

export class Tree<T> {
  public root: TreeNode<T> | null = null;

  constructor(data?: T[]) {
    if (data.length) {
      this.root = Tree.ConstructFromLevelOrderTraverse(data);
    }
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
   * 忽略了 null 节点
   * @param root 根节点
   * @param callback 按顺序回调每个节点
   */
  static levelOrderTraverseNode<T>(root: TreeNode<T>, callback?: (data: T) => void) {
    const result = [];
    if (root === null) {
      return result;
    }
    const queue = [root];
    while (queue.length > 0) {
      const node = queue.shift();
      if (node !== null) {
        result.push(node.val);
        callback?.(node.val);
        queue.push(node.left);
        queue.push(node.right);
      }
    }
    return result;
  }

  /**
   * BFS 广度优先
   * 不忽略 null 节点
   * @param root 根节点
   * @param n 节点数量
   */
  static levelOrderTraverseNodeKeepNull<T>(root: TreeNode<T> | null, n: number) {
    const result = [];
    if (root === null) {
      return result;
    }
    const queue = [root];
    while (queue.length > 0 && result.filter((x) => x !== null).length < n) {
      const node = queue.shift();
      if (node !== null) {
        result.push(node.val);
        queue.push(node.left);
        queue.push(node.right);
      } else {
        result.push(null);
      }
    }
    return result;
  }

  /**
   * #102, https://leetcode.cn/problems/binary-tree-level-order-traversal/
   * 二叉树的层次遍历
   */
  static BinaryTreeLevelOrderTraverse(root: TreeNode<number>) {
    const result = [];
    if (root === null) {
      return result;
    }
    const queue = [root];
    while (queue.length > 0) {
      const level = [];
      const size = queue.length;
      for (let i = 0; i < size; i++) {
        const node = queue.shift();
        level.push(node.val);
        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }
      }
      result.push(level);
    }
    return result;
  }

  /**
   * BFS 广度优先
   * 还原一棵树
   * @param data
   */
  static ConstructFromLevelOrderTraverse<T>(data: T[]) {
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
    return root;
  }

  static depthNode<T>(node: TreeNode<T> | null): number {
    if (node === null) {
      return 0;
    }
    const left = Tree.depthNode(node.left);
    const right = Tree.depthNode(node.right);
    return Math.max(left, right) + 1;
  }

  static minDepthNode<T>(node: TreeNode<T> | null): number {
    if (node === null) {
      return 0;
    }
    if (node.left === null && node.right !== null) {
      return 1 + Tree.minDepthNode(node.right);
    }
    if (node.left !== null && node.right === null) {
      return 1 + Tree.minDepthNode(node.left);
    }
    const left = Tree.minDepthNode(node.left);
    const right = Tree.minDepthNode(node.right);
    return Math.min(left, right) + 1;
  }

  static isBalancedNode<T>(node: TreeNode<T> | null): boolean {
    if (node === null) {
      return true;
    }
    const left = Tree.depthNode(node.left);
    const right = Tree.depthNode(node.right);
    return (
      Math.abs(left - right) <= 1 &&
      Tree.isBalancedNode(node.left) &&
      Tree.isBalancedNode(node.right)
    );
  }

  static postOrderTraverseNode<T>(node: TreeNode<T> | null, callback: (data: T) => void): void {
    if (node === null) {
      return;
    }
    Tree.postOrderTraverseNode(node.left, callback);
    Tree.postOrderTraverseNode(node.right, callback);
    callback(node.val);
  }

  static preOrderTraverseNode<T>(node: TreeNode<T> | null, callback: (data: T) => void): void {
    if (node === null) {
      return;
    }
    callback(node.val);
    Tree.preOrderTraverseNode(node.left, callback);
    Tree.preOrderTraverseNode(node.right, callback);
  }

  static inOrderTraverseNode<T>(node: TreeNode<T> | null, callback: (data: T) => void): void {
    if (node === null) {
      return;
    }
    Tree.inOrderTraverseNode(node.left, callback);
    callback(node.val);
    Tree.inOrderTraverseNode(node.right, callback);
  }

  /**
   * 广度优先
   * Breadth-First Traversal
   * BFS
   */
  public levelOrderTraverse(callback: (data: T) => void) {
    return Tree.levelOrderTraverseNode(this.root, callback);
  }

  /**
   * 深度优先
   * 前序递归遍历
   * Pre-Order Traversal
   * 先访问根节点，再访问子树
   */
  public preOrderTraverse(callback: (data: T) => void): void {
    Tree.preOrderTraverseNode(this.root, callback);
  }

  /**
   * 深度优先
   * 中序递归遍历
   * In-Order Traversal
   * 先访问左（右）子树，再访问根节点，最后访问右（左）子树
   */
  public inOrderTraverse(callback: (data: T) => void): void {
    Tree.inOrderTraverseNode(this.root, callback);
  }

  /**
   * 深度优先
   * 后序递归遍历
   * Post-Order Traversal
   * 先访问子树，再访问根节点
   */
  public postOrderTraverse(callback: (data: T) => void): void {
    Tree.postOrderTraverseNode(this.root, callback);
  }

  /**
   * 树的深度
   */
  public depth(): number {
    return Tree.depthNode(this.root);
  }

  /**
   * 树的最小深度
   */
  public minDepth() {
    return Tree.minDepthNode(this.root);
  }

  /**
   * 是否是平衡二叉树
   */
  public isBalanced(): boolean {
    return Tree.isBalancedNode(this.root);
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
}
