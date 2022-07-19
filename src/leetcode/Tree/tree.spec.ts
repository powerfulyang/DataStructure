import { Tree } from './Tree';
import { BinarySearchTree } from './BinarySearchTree';
import { AllPossibleFullBinaryTrees } from './FullBinaryTree';
import { CompleteBinaryTree } from './CompleteBinaryTree';
import { AVLTree } from './AVLTree';

describe('tree', () => {
  const tree = new Tree([5, 3, 7, 1, 4, null, 8]);
  const completeBinaryTree = new CompleteBinaryTree([1, 2, 3, 4, 5, 6, 7, 8]);

  it('Pre-Order Traverse', () => {
    const result = [];
    tree.preOrderTraverse((data) => result.push(data));
    expect(result).toEqual([5, 3, 1, 4, 7, 8]);
  });

  it('In-Order Traverse', () => {
    const result = [];
    tree.inOrderTraverse((data) => result.push(data));
    expect(result).toEqual([1, 3, 4, 5, 7, 8]);
  });

  it('Post-Order Traverse', () => {
    const result = [];
    tree.postOrderTraverse((data) => result.push(data));
    expect(result).toEqual([1, 4, 3, 8, 7, 5]);
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
});
