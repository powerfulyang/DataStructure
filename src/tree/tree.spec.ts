import { Tree } from '@/tree/Tree';
import { TreeNode } from '@/tree/TreeNode';
import { describe, expect, it } from '@jest/globals';

describe('tree', () => {
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  const tree = new Tree(root);

  it('TreeNode', () => {
    const result = tree.preOrderTraverseIterate();
    expect(result).toEqual([1, 2, 4, 5, 3]);
  });
});
