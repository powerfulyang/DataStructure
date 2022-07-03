import { Tree } from './Tree';
import { BinarySearchTree } from './BinarySearchTree';

describe('tree', () => {
  const tree = new Tree([5, 3, 7, 1, 4, null, 8]);

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
});
