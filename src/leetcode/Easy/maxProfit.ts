/**
 * @description \#121 Best Time to Buy and Sell Stock
 * @see https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */
export const maxProfit = (prices: number[]): number => {
  let max = 0;
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      // update min，if current price is lower than min
      min = prices[i];
    } else if (prices[i] - min > max) {
      max = prices[i] - min;
    }
  }
  return max;
};
