/**
 * @description \#36, https://leetcode.com/problems/valid-sudoku/
 * @summary 有效的数独
 */
export const isValidSudoku = (board: string[][]): boolean => {
  const rows = Array.from({ length: 9 }, () => new Set());
  const columns = Array.from({ length: 9 }, () => new Set());
  const boxes = Array.from({ length: 9 }, () => new Set());
  // 行
  for (let i = 0; i < 9; i++) {
    // 列
    for (let j = 0; j < 9; j++) {
      const num = board[i][j];
      if (num === '.') {
        // skip empty cell
        // eslint-disable-next-line no-continue
        continue;
      }
      // 9 x 9 split into 9 boxes by 3 x 3, index list: [0, 1, 2, 3, 4, 5, 6, 7, 8]
      const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      // check if the number is already in the row, column or box
      if (rows[i].has(num) || columns[j].has(num) || boxes[boxIndex].has(num)) {
        return false;
      }
      // add the number to the row, column and box
      rows[i].add(num);
      columns[j].add(num);
      boxes[boxIndex].add(num);
    }
  }
  return true;
};
