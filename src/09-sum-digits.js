/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */

function getSumOfDigits(n) {
  // throw new Error('Not implemented');
  let result = n;
  while (result >= 10) {
    result = String(result);
    result = result.split('').reduce((sum0, item) => {
      let sum1 = sum0;
      sum1 += +item;
      return sum1;
    }, 0);
  }
  return result;
}

module.exports = getSumOfDigits;
