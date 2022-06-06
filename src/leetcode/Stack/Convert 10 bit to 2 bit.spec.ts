/**
 * convert 10 bit numbers to 2 bit
 */
import { Stack } from './Stack';

export const convert = (origin: number) => {
  const stack = new Stack<number>();
  let current = origin;
  if (current === 0) {
    return '0';
  }
  while (current > 0) {
    stack.push(current % 2);
    current = Math.floor(current / 2);
  }
  let result = '';
  while (!stack.isEmpty()) {
    result += stack.pop();
  }
  return result;
};

describe('convert 10 bit numbers to 2 bit', () => {
  it('test', () => {
    expect(convert(0)).toBe('0');
    expect(convert(1)).toBe('1');
    expect(convert(2)).toBe('10');
    expect(convert(3)).toBe('11');
    expect(convert(4)).toBe('100');
    expect(convert(5)).toBe('101');
    expect(convert(6)).toBe('110');
    expect(convert(7)).toBe('111');
    expect(convert(8)).toBe('1000');
  });
});
