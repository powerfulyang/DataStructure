import { BinarySearchTree } from '@/bst/BinarySearchTree';
import { describe, expect, it } from '@jest/globals';

describe('bst', () => {
  it('should ', () => {
    const bst = new BinarySearchTree();
    bst.insert(10);
    bst.insert(5);
    bst.insert(13);
    bst.insert(11);
    bst.insert(2);
    bst.insert(16);
    bst.insert(7);
    expect(bst.search(10)).toBe(true);
  });
});
