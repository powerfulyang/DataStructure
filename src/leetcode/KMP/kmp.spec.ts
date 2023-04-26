import { describe, expect, it } from '@jest/globals';
import { getNext, ImplementStrStr } from './ImplementStrStr';
import { RepeatedSubstringPattern } from './RepeatedSubstringPattern';

describe('kmp', () => {
  it('getNext', () => {
    expect(getNext('ll')).toEqual([0, 1]);
    expect(getNext('abab')).toEqual([0, 0, 1, 2]);
    expect(getNext('abcdabc')).toEqual([0, 0, 0, 0, 1, 2, 3]);
    expect(getNext('abcabcabc')).toEqual([0, 0, 0, 1, 2, 3, 4, 5, 6]);
  });

  it('strStr', () => {
    expect(ImplementStrStr('', '')).toEqual(0);
    expect(ImplementStrStr('', 'a')).toEqual(-1);
    expect(ImplementStrStr('abcdaw', 'da')).toEqual(3);
  });

  it('repeated substring pattern', () => {
    expect(RepeatedSubstringPattern('aa')).toEqual(true);
    expect(RepeatedSubstringPattern('abab')).toEqual(true);
    expect(RepeatedSubstringPattern('aba')).toEqual(false);
    expect(RepeatedSubstringPattern('abcabcabcabc')).toEqual(true);
    expect(RepeatedSubstringPattern('abcabcabcab')).toEqual(false);
  });
});
