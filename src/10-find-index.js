/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  // throw new Error('Not implemented');
  let array1 = array;
  let indexMemory = 0;
  let len = array1.length;
  let index = 0;
  while (len > 3) {
    const indexBorder = Math.floor(len / 2);
    if (array1[indexBorder] === value) { return indexBorder; }
    if (array1[indexBorder] > value) {
      array1 = array1.slice(0, indexBorder);
    } else {
      indexMemory += indexBorder + 1;
      array1 = array1.slice(indexBorder + 1);
    }
    len = array1.length;
  }
  const leng = array1.length;
  for (let i = 0; i < leng; i++) {
    if (array1[i] === value) {
      index = i;
      break;
    }
  }
  return index + indexMemory;
}

module.exports = findIndex;
