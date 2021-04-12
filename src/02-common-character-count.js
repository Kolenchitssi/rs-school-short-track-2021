/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1;
 * @param {String} s2;
 * @return {Number};
 *
 * @example;
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  function stringCommon(st) {
    const result = {};
    const str = st.split('');
    str.forEach((key) => {
      if (result[key] === undefined) result[key] = 1;
      else result[key] += 1;
    });
    return result;
  }

  const res1 = stringCommon(s1);
  const res2 = stringCommon(s2);
  let sumResult = 0;
  const res1keys = Object.keys(res1);

  res1keys.forEach((k) => {
    if (res2[k] !== undefined) sumResult += Math.min(res1[k], res2[k]);
  });
  return sumResult;
}

module.exports = getCommonCharacterCount;
