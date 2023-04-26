import { describe, expect, it } from '@jest/globals';

describe('Array', () => {
  it('concat', () => {
    expect([1, 2, 3].concat([4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    expect([1].concat(2).concat(3).concat(4)).toEqual([1, 2, 3, 4]);
  });

  it('将数组中的数组元素复制到指定位置或从指定位置复制。', () => {
    expect([1, 2, 3].copyWithin(0, 2)).toEqual([3, 2, 3]);
    expect([1, 2, 3].copyWithin(0, 2, 3)).toEqual([3, 2, 3]);
    expect([1, 2, 3].copyWithin(-2, 2)).toEqual([1, 3, 3]);
  });

  it('从数组中添加/删除元素。', () => {
    const array = [1, 2, 3, 4];
    expect(array.splice(2, 1)).toEqual([3]);
    expect(array).toEqual([1, 2, 4]);
    expect(array.splice(2, 0, 5)).toEqual([]);
    expect(array).toEqual([1, 2, 5, 4]);
  });

  it('flat', () => {
    expect([1, [2], 3].flat()).toEqual([1, 2, 3]);
    expect([1, [2, [3, [4]]]].flat(Infinity)).toEqual([1, 2, 3, 4]);
  });

  it('flatMap', () => {
    expect([1, 2, 3].flatMap((x) => [x, x * 2])).toEqual([1, 2, 2, 4, 3, 6]);
    expect([1, 2, 3].flatMap(() => 4)).toEqual([4, 4, 4]);
    expect([1, 2, 3].flatMap(() => [4, 5])).toEqual([4, 5, 4, 5, 4, 5]);
  });

  it('valueOf', () => {
    expect([1, 2, 3].valueOf()).toEqual([1, 2, 3]);
    expect([1, 2, 3, [4]].valueOf()).toEqual([1, 2, 3, [4]]);
  });
});
