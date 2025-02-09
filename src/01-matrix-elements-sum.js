/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix;
 * @return {Number};
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  // throw new Error('Not implemented');
  const lenY = matrix.length;
  const lenX = matrix[0].length;
  let sum = 0;

  for (let i = 0; i < lenX; i++) {
    for (let j = 0; j < lenY; j++) {
      if (matrix[j][i] === 0) break;
      sum += matrix[j][i];
    }
  }
  return sum;
}

module.exports = getMatrixElementsSum;
