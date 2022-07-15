import { Stack } from './Stack';

/**
 * #71, https://leetcode.cn/problems/simplify-path
 */
export function SimplifyPath(path: string) {
  const stack = new Stack<string>();
  const pathArr = path.split('/');
  for (let i = 0; i < pathArr.length; i++) {
    const dir = pathArr[i];
    if (dir === '..') {
      if (stack.size > 0) {
        stack.pop();
      }
    } else if (dir !== '' && dir !== '.') {
      stack.push(dir);
    }
  }
  return `/${stack.toArray().join('/')}`;
}
