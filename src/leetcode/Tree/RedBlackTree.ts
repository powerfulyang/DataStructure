import { Color, RedBlackNode } from './RedBlackNode';

/**
 * 红黑树
 * 维持一个二分搜索树的平衡性，key 有序
 * 1. 每个节点或者是红色的，或者是黑色的
 * 2. 根节点是黑色的
 * 3. 每一个叶子节点（最后的空节点）是黑色的
 * 4. 如果一个节点是红色的，那么他的孩子节点都是黑色的
 * 5. 从任意一个节点到叶子节点，经过的黑色节点是一样的
 */
export class RedBlackTree {
  public root: RedBlackNode | null = null;

  private size = 0;

  public getSize(): number {
    return this.size;
  }

  public isEmpty(): boolean {
    return this.size === 0;
  }

  public add(key: number, value: number): void {
    this.root = this.addRecursively(this.root, key, value);
    this.root.color = Color.BLACK;
  }

  /**
   * 向以 node 为根的红黑树中插入元素(key, value)，递归算法
   * @param node
   * @param key
   * @param value
   * @private
   */
  private addRecursively(node: RedBlackNode | null, key: number, value: number): RedBlackNode {
    if (node === null) {
      this.size++;
      return new RedBlackNode(key, value);
    }

    if (key < node.key) {
      node.left = this.addRecursively(node.left, key, value);
    } else if (key > node.key) {
      node.right = this.addRecursively(node.right, key, value);
    } else {
      node.value = value;
    }

    if (this.isRed(node.right) && !this.isRed(node.left)) {
      node = this.leftRotate(node);
    }

    if (this.isRed(node.left) && this.isRed(node.left.left)) {
      node = this.rightRotate(node);
    }

    if (this.isRed(node.left) && this.isRed(node.right)) {
      this.flipColors(node);
    }

    return node;
  }

  private isRed(node: RedBlackNode | null): boolean {
    if (node === null) {
      return false;
    }

    return node.color === Color.RED;
  }

  private leftRotate(node: RedBlackNode): RedBlackNode {
    const x = node.right;
    node.right = x.left;
    x.left = node;

    x.color = node.color;
    node.color = Color.RED;

    return x;
  }

  private rightRotate(node: RedBlackNode): RedBlackNode {
    const x = node.left;
    node.left = x.right;
    x.right = node;

    x.color = node.color;
    node.color = Color.RED;

    return x;
  }

  private flipColors(node: RedBlackNode): void {
    node.color = Color.RED;
    node.left.color = Color.BLACK;
    node.right.color = Color.BLACK;
  }
}
