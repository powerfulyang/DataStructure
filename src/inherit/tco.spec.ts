import { factorial, factorial2 } from './TailCallOptimization';

describe('tail call optimization', () => {
  it('not tail recursive', () => {
    expect(factorial(10000000)).toBe(Infinity);
  });

  it('tail recursive', () => {
    expect(factorial2(10000000)).toBe(Infinity);
  });
});
