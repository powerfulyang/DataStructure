import { describe, expect, it } from '@jest/globals';
import { AVLTree } from './AVLTree';
import { BinarySearchTree } from './BinarySearchTree';
import { CompleteBinaryTree } from './CompleteBinaryTree';
import { AllPossibleFullBinaryTrees } from './FullBinaryTree';
import { Color } from './RedBlackNode';
import { RedBlackTree } from './RedBlackTree';
import { Tree } from './Tree';

describe('tree', () => {
  const tree = new Tree([5, 3, 7, 1, 4, null, 8]);
  const completeBinaryTree = new CompleteBinaryTree([1, 2, 3, 4, 5, 6, 7, 8]);

  it('Pre-Order Traverse', () => {
    const iteration = [];
    const recursion = [];
    tree.preOrderTraverseIterate((v) => {
      iteration.push(v);
    });
    tree.preOrderTraverseRecurse((v) => {
      recursion.push(v);
    });
    expect(iteration).toEqual(recursion);
    expect(iteration).toEqual([5, 3, 1, 4, 7, 8]);
  });

  it('In-Order Traverse', () => {
    const recursion = [];
    const iteration = [];
    tree.inOrderTraverseIterate((data) => iteration.push(data));
    tree.inOrderTraverseRecurse((data) => recursion.push(data));
    expect(recursion).toEqual(iteration);
    expect(recursion).toEqual([1, 3, 4, 5, 7, 8]);
  });

  it('Post-Order Traverse', () => {
    const recursion = [];
    const iteration = [];
    tree.postOrderTraverseIterate((data) => iteration.push(data));
    tree.postOrderTraverseRecurse((data) => recursion.push(data));
    expect(iteration).toEqual([1, 4, 3, 8, 7, 5]);
    expect(recursion).toEqual(iteration);
  });

  it('Level-Order Traverse', () => {
    const result = [];
    tree.levelOrderTraverse((data) => result.push(data));
    expect(result).toEqual([5, 3, 7, 1, 4, 8]);
  });

  it('isBalanced', () => {
    expect(tree.isBalanced()).toBe(true);
  });

  it('maxValue', () => {
    expect(tree.max()).toBe(Tree.maxValue(tree.root));
  });

  it('minDepth', () => {
    expect(tree.minDepth()).toBe(3);
  });

  it('reverseFromLevelOrderTraverse', () => {
    /**
     *                  5
     *                 / \
     *                3   7
     *               / \   \
     *              1   4   8
     */
    const bst = new BinarySearchTree([]);
    [5, 3, 7, 1, 4, 8].forEach((data) => bst.insert(data));
    expect(Tree.isSameTree(tree.root, bst.root)).toBe(true);
  });

  it('AllPossibleFullBinaryTrees', () => {
    const result = AllPossibleFullBinaryTrees(3);
    expect(result.map((x) => Tree.levelOrderTraverseNodeKeepNull(x, 3))).toEqual([[0, 0, 0]]);
    const result2 = AllPossibleFullBinaryTrees(7);
    expect(result2.map((x) => Tree.levelOrderTraverseNodeKeepNull(x, 7))).toIncludeSameMembers([
      [0, 0, 0, null, null, 0, 0, 0, 0],
      [0, 0, 0, null, null, 0, 0, null, null, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, null, null, null, null, 0, 0],
      [0, 0, 0, 0, 0, null, null, 0, 0],
    ]);
  });

  it('should pass the test case', () => {
    expect(Tree.BinaryTreeLevelOrderTraverse(tree.root)).toEqual([[5], [3, 7], [1, 4, 8]]);
  });

  it('completeBinaryTree', () => {
    expect(completeBinaryTree.maxDepth()).toBe(4);
    expect(completeBinaryTree.minDepth()).toBe(3);
    expect(completeBinaryTree.countNodes()).toBe(8);
  });

  it('AVLTree', () => {
    const avlTree = new AVLTree([1, 2, 3]);
    const bst = new BinarySearchTree([1, 2, 3]);
    expect(Tree.isSameTree(avlTree.root, bst.root)).toBe(false);
    expect(avlTree.isBalanced()).toBe(true);
  });

  it('RBTree', () => {
    const rbTree = new RedBlackTree();
    rbTree.add(1, 1);
    rbTree.add(2, 2);
    rbTree.add(3, 3);
    rbTree.add(4, 4);
    rbTree.add(5, 5);
    rbTree.add(6, 6);
    rbTree.add(7, 7);
    rbTree.add(8, 8);
    expect(rbTree.root.color).toBe(Color.BLACK);
  });
});
