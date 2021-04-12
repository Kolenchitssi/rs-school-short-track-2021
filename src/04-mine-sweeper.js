/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  // throw new Error('Not implemented');
  const lenY = matrix.length;
  const lenX = matrix[0].length;
  const result = [];
  let sum1 = 0;

  for (let y = 0; y < lenY; y++) {
    result[y] = []; // вот так надо оказывется инициализировать многомерные массивы в JavaScript :))
    for (let x = 0; x < lenX; x++) {
      sum1 = 0;
      if (y - 1 >= 0 && x - 1 >= 0) { if (matrix[y - 1][x - 1] === true) sum1 += 1; }
      if (x - 1 >= 0) { if (matrix[y][x - 1] === true) sum1 += 1; }
      if (x - 1 >= 0 && y + 1 < lenY) { if (matrix[y + 1][x - 1] === true) sum1 += 1; }
      if (y - 1 >= 0) { if (matrix[y - 1][x] === true) sum1 += 1; }
      if (y + 1 < lenY) { if (matrix[y + 1][x] === true) sum1 += 1; }
      if (y - 1 >= 0 && x + 1 < lenX) { if (matrix[y - 1][x + 1] === true) sum1 += 1; }
      if (x + 1 < lenX) { if (matrix[y][x + 1] === true) sum1 += 1; }
      if (x + 1 < lenX && y + 1 < lenY) { if (matrix[y + 1][x + 1] === true) sum1 += 1; }
      result[y][x] = sum1;
    }
  }
  return result;
}

module.exports = minesweeper;
