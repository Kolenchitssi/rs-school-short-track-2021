/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  // throw new Error('Not implemented');
  // function stringCoding(str1) {
  const arr = str.split('');
  const len = arr.length;
  const result = [[arr[0], 1]];// [буква, количество]
  let j = 0;
  for (let i = 1; i < len; i++) {
    if (arr[i] === arr[i - 1]) {
      result[j][1] += 1;
    } else {
      j++;
      result[j] = [];
      result[j][0] = arr[i];
      result[j][1] = 1;
    }
  }
  //   return result;
  // }
  // const arrResult = stringCoding(str);
  let resultOut = '';
  result.forEach((k) => {
    if (k[1] > 1) {
      resultOut += `${k[1]}${k[0]}`;
    } else { resultOut += `${k[0]}`; }
  });
  if (resultOut === 'undefined') {
    return '';
  }
  return resultOut;
}

module.exports = encodeLine;
