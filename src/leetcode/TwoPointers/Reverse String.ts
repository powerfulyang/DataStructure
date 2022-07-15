export function reserveString(s: string): string {
  let left = 0;
  let right = s.length - 1;
  const result = s.split('');
  while (left < right) {
    [result[left], result[right]] = [result[right], result[left]];
    left++;
    right--;
  }
  return result.join('');
}
