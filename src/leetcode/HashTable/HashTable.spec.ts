import { RansomNote } from './RansomNote';
import { ThreeSum } from './ThreeSum';
import { TopKFrequentElements } from './TopKFrequentElements';
import { FourSumII } from './FourSumII';
import { TwoSum } from './TwoSum';
import { FourSum } from './FourSum';

describe('hash table', () => {
  it('RansomNote', () => {
    expect(RansomNote('aa', 'aab')).toBe(true);
    expect(RansomNote('aa', 'ab')).toBe(false);
  });

  it('TopKFrequentElements', () => {
    expect(TopKFrequentElements([1, 1, 1, 2, 2, 3], 2)).toIncludeSameMembers([1, 2]);
  });

  it('TwoSum', () => {
    expect(TwoSum([2, 7, 11, 15], 9)).toIncludeSameMembers([0, 1]);
  });

  it('ThreeSum', () => {
    expect(ThreeSum([-1, 0, 1, 2, -1, -4])).toIncludeSameMembers([
      [-1, 0, 1],
      [-1, -1, 2],
    ]);
  });

  it('FourSum', () => {
    expect(FourSum([1, 0, -1, 0, -2, 2], 0)).toIncludeSameMembers([
      [-2, -1, 1, 2],
      [-2, 0, 0, 2],
      [-1, 0, 0, 1],
    ]);
  });

  it('FourSumII', () => {
    expect(FourSumII([1, 2], [-2, -1], [-1, 2], [0, 2])).toBe(2);
  });
});
