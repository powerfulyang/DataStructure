import { StackImplementByQueue } from './StackImplementByQueue';
import { ValidParentheses } from './ValidParentheses';

describe('stack', () => {
  it('StackImplementByQueue', () => {
    const stack = new StackImplementByQueue();
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
    stack.push(3);
    expect(stack.peek()).toBe(3);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
  });

  it('ValidParentheses', () => {
    expect(ValidParentheses('()')).toBe(true);
    expect(ValidParentheses('()[]{}')).toBe(true);
    expect(ValidParentheses('(]')).toBe(false);
  });
});
