/**
 * #2260, https://leetcode.cn/problems/minimum-consecutive-cards-to-pick-up/
 */
export function minimumCardPickup(cards: number[]): number {
  let ans = Infinity;
  const helperMap = new Map();
  for (let i = 0; i < cards.length; i++) {
    const lastIndex = helperMap.get(cards[i]);
    if (lastIndex !== undefined) {
      ans = Math.min(i - lastIndex, ans);
    }
    helperMap.set(cards[i], i);
  }
  return Infinity === ans ? -1 : ans + 1;
}
