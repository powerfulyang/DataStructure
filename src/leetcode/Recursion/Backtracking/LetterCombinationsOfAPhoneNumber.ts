const map = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
};

const backtracking = (digits: number[], path: string[], index: number, result: string[]) => {
  if (path.length === digits.length) {
    result.push(path.join(''));
    return;
  }
  const str = map[digits[index]];
  for (let i = 0; i < str.length; i++) {
    path.push(str[i]);
    backtracking(digits, path, index + 1, result);
    path.pop();
  }
};

/**
 * #17, https://leetcode.cn/problems/letter-combinations-of-a-phone-number/
 */
export const LetterCombinationsOfAPhoneNumber = (digits: number[]) => {
  if (digits.length === 0) return [];
  const result = [];
  backtracking(digits, [], 0, result);
  return result;
};
