import { getNext, ImplementStrStr } from './ImplementStrStr';

describe('kmp', () => {
  it('strStr', () => {
    expect(getNext('ll')).toEqual([0, 1]);
    expect(getNext('abab')).toEqual([0, 0, 1, 2]);
    expect(getNext('abcdabc')).toEqual([0, 0, 0, 0, 1, 2, 3]);

    expect(ImplementStrStr('', '')).toEqual(0);
    expect(ImplementStrStr('', 'a')).toEqual(-1);
    expect(ImplementStrStr('abcdaw', 'da')).toEqual(3);
  });
});
