export function romanToInt(s: string): number {
  const helperMap = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ]);
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    const current = helperMap.get(s[i]);
    const next = helperMap.get(s[i + 1]) || 0;
    if (current >= next) {
      ans += current;
    } else {
      ans -= current;
    }
  }
  return ans;
}
