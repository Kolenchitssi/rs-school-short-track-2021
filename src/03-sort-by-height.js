/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // throw new Error('Not implemented');
  const arr1 = arr.slice();

  arr1.sort((a, b) => {
    if (a === -1) return -1;
    return a - b;
  });

  const lastOne = arr1.lastIndexOf(-1);
  const res = arr1.slice(lastOne + 1);
  const result = [];
  let j = 0;

  arr.forEach((item) => {
    if (item === -1) result.push(item);
    else {
      result.push(res[j]);
      j++;
    }
  });
  return result;
}

module.exports = sortByHeight;
