import { cloneDeep } from 'lodash';
import { romanToInt } from './RomanToInteger';
import { strToObject } from './StrToObject';
import { CurryMultiply } from './CurryMultiply';
import { ListToTree, TreeToList } from './ListAndTree';
import { BinarySearchTree } from '../Tree/BinarySearchTree';
import { binarySearchTreeFindTarget } from './BinarySearchTreeFindTarget';
import { removeOuterParentheses } from './removeOuterParentheses';
import { divide } from './divide';
import { KthLargest } from './kthLargest';
import { fib } from './fib';
import { isAnagram } from './isAnagram';

describe('easy', () => {
  it('Roman to Integer', () => {
    expect(romanToInt('III')).toBe(3);
  });

  it('String to Object', () => {
    expect(strToObject('a.b.c')).toEqual({
      a: {
        b: {
          c: null,
        },
      },
    });
  });

  it('CurryMultiply', () => {
    const result = CurryMultiply(1)(2)(3);
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    expect(result + 1).toEqual(7);
    expect(result()).toEqual(6);
  });

  it('List <=> Tree', () => {
    const list = [
      {
        pId: 0,
        title: '1',
        id: 1,
      },
      {
        pId: 1,
        title: '1-1',
        id: 2,
      },
      {
        pId: 1,
        title: '1-2',
        id: 3,
      },
      {
        pId: 2,
        title: '1-1-1',
        id: 4,
      },
    ];
    const tree = {
      pId: 0,
      title: '1',
      id: 1,
      children: [
        {
          pId: 1,
          title: '1-1',
          id: 2,
          children: [
            {
              pId: 2,
              title: '1-1-1',
              id: 4,
            },
          ],
        },
        {
          pId: 1,
          title: '1-2',
          id: 3,
        },
      ],
    };
    expect(ListToTree(cloneDeep(list))).toEqual(tree);
    expect(TreeToList(tree)).toEqual(list);
  });

  it('binarySearchTreeFindTarget', () => {
    const tree = new BinarySearchTree([8, 6, 10, 5, 7, 9, 11]);
    const target = 22;
    expect(binarySearchTreeFindTarget(tree.root, target)).toBe(false);
  });

  it('removeOuterParentheses', () => {
    expect(removeOuterParentheses('(()())(())')).toBe('()()()');
    expect(removeOuterParentheses('(()())(())(()(()))')).toBe('()()()()(())');
    expect(removeOuterParentheses('()()')).toBe('');
  });

  it('整数除法', () => {
    expect(divide(10, 3)).toBe(3);
    expect(divide(7, -3)).toBe(-2);
    expect(divide(0, 1)).toBe(0);
    expect(divide(1, 1)).toBe(1);
    expect(divide(-2147483648, -1)).toBe(2147483647);
  });

  it('二叉搜索树的第k大节点', () => {
    const tree = new BinarySearchTree([3, 1, 4, null, 2]);
    expect(KthLargest(tree.root, 1)).toBe(4);
    expect(KthLargest(tree.root, 2)).toBe(3);
    expect(KthLargest(tree.root, 3)).toBe(2);
    expect(KthLargest(tree.root, 4)).toBe(1);
  });

  it('斐波那契数列迭代法', () => {
    expect(fib(0)).toBe(0);
    expect(fib(1)).toBe(1);
    expect(fib(2)).toBe(1);
    expect(fib(3)).toBe(2);
    expect(fib(4)).toBe(3);
    expect(fib(5)).toBe(5);
    expect(fib(6)).toBe(8);
    expect(fib(7)).toBe(13);
    expect(fib(8)).toBe(21);
    expect(fib(9)).toBe(34);
    expect(fib(10)).toBe(55);
  });

  it('isAnagram', () => {
    expect(isAnagram('anagram', 'nagaram')).toBe(true);
    expect(isAnagram('rat', 'car')).toBe(false);
  });
});
