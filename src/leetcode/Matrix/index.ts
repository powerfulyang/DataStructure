/**
 * @description \#59, https://leetcode.cn/problems/spiral-matrix-ii/
 * @summary 螺旋矩阵 II
 */
export const SpiralMatrixII = (n: number): number[][] => {
  // n = 4
  /**
   *
   *  [[1 ,2 ,3 ,4],
   *   [12,13,14,5],
   *   [11,16,15,6],
   *   [10,9 ,8 ,7]]
   *
   */
  // 创建 n x n 的二维数组
  const arr = Array.from({ length: n }).map(() => []);

  let k = 1;
  for (let i = 0; i < n; i++) {
    // 上行 索引的列变 行不变，且 列的变化顺序为从左到右，列号 j 自增，取值顺序为 i ～ n-1-i
    for (let j = i; j < n - i; j++) {
      arr[i][j] = k;
      k += 1;
    }
    // 右列 索引的行变 列不变 且 行的变化顺序为从上到下，行号 j 自增，取值顺序为 i+1 ～ n-1-i
    for (let j = i + 1; j < n - i; j++) {
      arr[j][n - 1 - i] = k;
      k += 1;
    }
    // 下行 索引的列变 行不变 且 列的变化顺序为从右到左，列号 j 自减，取值顺序为 n-2-i ～ i
    for (let j = n - 2 - i; j >= i; j--) {
      arr[n - 1 - i][j] = k;
      k += 1;
    }
    // 左列 索引的行变 列不变 且 行的变化顺序为从下到上，行号 j 自减，取值顺序为 n-2-i ～ i+1
    for (let j = n - 2 - i; j > i; j--) {
      arr[j][i] = k;
      k += 1;
    }
  }

  return arr;
};
