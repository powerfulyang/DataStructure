import { describe, expect, it } from '@jest/globals';

describe('Math', () => {
  it('去尾法', () => {
    expect(Math.trunc(3.5)).toBe(3);
    expect(Math.trunc(-3.1)).toBe(-3);
  });

  it('四舍五入', () => {
    expect(Math.round(3.5)).toBe(4);
    expect(Math.round(-3.1)).toBe(-3);
  });

  it('向下取整', () => {
    expect(Math.floor(3.5)).toBe(3);
    expect(Math.floor(-3.1)).toBe(-4);
  });

  it('向上取整', () => {
    expect(Math.ceil(3.5)).toBe(4);
    expect(Math.ceil(-3.1)).toBe(-3);
  });

  it('绝对值', () => {
    expect(Math.abs(-3.1)).toBe(3.1);
    expect(Math.abs(3.1)).toBe(3.1);
  });

  it('返回数的符号（检查它是正数、负数还是零）', () => {
    expect(Math.sign(-3.1)).toBe(-1);
    expect(Math.sign(3.1)).toBe(1);
    expect(Math.sign(0)).toBe(0);
  });
});
