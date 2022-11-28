import { cloneDeep } from 'lodash';
import { romanToInt } from './RomanToInteger';
import { strToObject } from './StrToObject';
import { CurryMultiply } from './CurryMultiply';
import { ListToTree, TreeToList } from './ListAndTree';
import { BinarySearchTree } from '../Tree/BinarySearchTree';
import { binarySearchTreeFindTarget } from './BinarySearchTreeFindTarget';
import { removeOuterParentheses } from './removeOuterParentheses';

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
});
