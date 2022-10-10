import { romanToInt } from './RomanToInteger';
import { strToObject } from './StrToObject';

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
});
