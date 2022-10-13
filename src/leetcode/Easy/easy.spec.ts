import { romanToInt } from './RomanToInteger';
import { strToObject } from './StrToObject';
import { CurryMultiply } from './CurryMultiply';

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
});
