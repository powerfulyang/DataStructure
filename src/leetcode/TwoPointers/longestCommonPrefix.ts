/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 *
 * If there is no common prefix, return an empty string "".
 *
 * Example 1:
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 *
 * Example 2:
 * Input: ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 *
 * Note:
 * All given inputs are in lowercase letters a-z.
 */
export const longestCommonPrefix_bad = (strs: string[]): string => {
  let i = 0;
  let ans = '';

  while (i >= 0) {
    const index = i;
    const flag = strs.slice(1).some((str) => {
      return str[index] !== strs[0][index] || !str[index] || !strs[0][index];
    });
    if (flag) {
      i = -1;
    } else {
      ans += strs[0][i];
      i++;
    }
  }

  return ans;
};

export const longestCommonPrefix = (strs: string[]): string => {
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    // check if prefix is a prefix of strs[i]
    while (strs[i].indexOf(prefix) !== 0) {
      // if not, remove the last character of prefix
      prefix = prefix.substring(0, prefix.length - 1);
      // if prefix is empty, return empty string
      if (prefix.length === 0) {
        return '';
      }
    }
  }
  return prefix;
};
