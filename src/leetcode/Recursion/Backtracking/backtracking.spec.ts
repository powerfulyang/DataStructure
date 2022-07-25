import { Combinations } from './Combinations';
import { CombinationSum3 } from './CombinationSumIII';
import { LetterCombinationsOfAPhoneNumber } from './LetterCombinationsOfAPhoneNumber';
import { CombinationSum } from './CombinationSum';
import { PalindromePartitioning } from './palindrome-partitioning';

describe('backtracking', () => {
  it('Combinations', () => {
    expect(Combinations(4, 2)).toIncludeSameMembers([
      [1, 2],
      [1, 3],
      [1, 4],
      [2, 3],
      [2, 4],
      [3, 4],
    ]);
  });

  it('CombinationSumIII', () => {
    expect(CombinationSum3(3, 7)).toIncludeSameMembers([[1, 2, 4]]);
    expect(CombinationSum3(3, 9)).toIncludeSameMembers([
      [1, 2, 6],
      [1, 3, 5],
      [2, 3, 4],
    ]);
  });

  it('LetterCombinationsOfAPhoneNumber', () => {
    expect(LetterCombinationsOfAPhoneNumber([2, 3, 4])).toIncludeSameMembers([
      'adg',
      'adh',
      'adi',
      'aeg',
      'aeh',
      'aei',
      'afg',
      'afh',
      'afi',
      'bdg',
      'bdh',
      'bdi',
      'beg',
      'beh',
      'bei',
      'bfg',
      'bfh',
      'bfi',
      'cdg',
      'cdh',
      'cdi',
      'ceg',
      'ceh',
      'cei',
      'cfg',
      'cfh',
      'cfi',
    ]);
  });

  it('CombinationSum', () => {
    expect(CombinationSum([2, 3, 6, 7], 7)).toEqual([[2, 2, 3], [7]]);
    expect(CombinationSum([2, 3, 5], 8)).toEqual([
      [2, 2, 2, 2],
      [2, 3, 3],
      [3, 5],
    ]);
  });

  it('PalindromePartitioning', () => {
    expect(PalindromePartitioning('aab')).toEqual([
      ['a', 'a', 'b'],
      ['aa', 'b'],
    ]);
    expect(PalindromePartitioning('aabb')).toIncludeSameMembers([
      ['a', 'a', 'b', 'b'],
      ['aa', 'b', 'b'],
      ['a', 'a', 'bb'],
      ['aa', 'bb'],
    ]);
  });
});
