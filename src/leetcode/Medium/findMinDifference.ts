const getMinutes = (t: string) => {
  return (
    ((t.charCodeAt(0) - '0'.charCodeAt(0)) * 10 + (t.charCodeAt(1) - '0'.charCodeAt(0))) * 60 +
    (t.charCodeAt(3) - '0'.charCodeAt(0)) * 10 +
    (t.charCodeAt(4) - '0'.charCodeAt(0))
  );
};

/**
 * @description \#539 最小时间差
 * @see {@link https://leetcode-cn.com/problems/minimum-time-difference/}
 * @param timePoints - 24小时制的时间 00:00 - 23:59
 * @author powerfulyang
 */
export const findMinDifference = (timePoints: string[]): number => {
  const n = timePoints.length;
  if (n > 1440) {
    return 0;
  }
  timePoints.sort();
  let ans = Number.MAX_VALUE;
  const t0Minutes = getMinutes(timePoints[0]);
  let preMinutes = t0Minutes;
  for (let i = 1; i < n; ++i) {
    const minutes = getMinutes(timePoints[i]);
    ans = Math.min(ans, minutes - preMinutes); // 相邻时间的时间差
    preMinutes = minutes;
  }
  ans = Math.min(ans, t0Minutes + 1440 - preMinutes); // 首尾时间的时间差
  return ans;
};
