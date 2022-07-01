import { Tree } from './Tree';

describe('tree', () => {
  const tree = new Tree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  it('Pre-Order Traverse', () => {
    const result = [];
    tree.preOrderTraverse((data) => result.push(data));
    expect(result).toBeDefined();
  });

  it('In-Order Traverse', () => {
    const result = [];
    tree.inOrderTraverse((data) => result.push(data));
    expect(result).toBeDefined();
  });

  it('Post-Order Traverse', () => {
    const result = [];
    tree.postOrderTraverse((data) => result.push(data));
    expect(result).toBeDefined();
  });

  it('Level-Order Traverse', () => {
    const result = [];
    tree.levelOrderTraverse((data) => result.push(data));
    expect(result).toBeDefined();
  });

  it('isBalanced', () => {
    expect(tree.isBalanced()).toBe(false);
  });
});
