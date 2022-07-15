/**
 * #150, https://leetcode.cn/problems/evaluate-reverse-polish-notation/
 */
export const EvaluateReversePolishNotation = (tokens: string[]) => {
  const helperStack: number[] = [];
  let tmp;

  for (let i = 0, { length } = tokens; i < length; i++) {
    tmp = tokens[i];

    switch (tmp) {
      case '+': {
        const b = helperStack.pop();
        const a = helperStack.pop();
        helperStack.push(a + b);
        break;
      }
      case '-': {
        const b = helperStack.pop();
        const a = helperStack.pop();
        helperStack.push(a - b);
        break;
      }
      case '*': {
        const b = helperStack.pop();
        const a = helperStack.pop();
        helperStack.push(a * b);
        break;
      }
      case '/': {
        const b = helperStack.pop();
        const a = helperStack.pop();
        helperStack.push(Math.trunc(a / b));
        break;
      }
      default:
        helperStack.push(Number(tmp));
        break;
    }
  }

  return helperStack.pop();
};
