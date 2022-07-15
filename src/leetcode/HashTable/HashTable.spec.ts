import { RansomNote } from './RansomNote';
import { ThreeSum } from './3sum';
import { TopKFrequentElements } from './TopKFrequentElements';

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
});
