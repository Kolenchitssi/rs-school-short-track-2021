/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new Error('Not implemented');
  const str = String(n);
  const arr = [];
  const len = str.length;
  for (let i = 0; i < len; i++) {
    arr[i] = +(str.slice(0, i) + str.slice(i + 1));
  }
  const result = Math.max(...arr);
  return result;
}

module.exports = deleteDigit;
