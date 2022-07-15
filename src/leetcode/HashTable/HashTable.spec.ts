import { RansomNote } from './RansomNote';
import { ThreeSum } from './ThreeSum';
import { TopKFrequentElements } from './TopKFrequentElements';
import { FourSumCountII } from './FourSumCountII';
import { TwoSum } from './TwoSum';

describe('hash table', () => {
  it('RansomNote', () => {
    expect(RansomNote('aa', 'aab')).toBe(true);
    expect(RansomNote('aa', 'ab')).toBe(false);
  });

  it('ThreeSum', () => {
    expect(ThreeSum([-1, 0, 1, 2, -1, -4])).toEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
  });

  it('TopKFrequentElements', () => {
    expect(TopKFrequentElements([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2]);
  });

  it('FourSumCountII', () => {
    expect(FourSumCountII([1, 2], [-2, -1], [-1, 2], [0, 2])).toBe(2);
  });

  it('TwoSum', () => {
    expect(TwoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
});
