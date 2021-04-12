/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const newArr = names.slice();
  const len = names.length;
  const result = {};

  for (let index = 1; index < len; index++) {
    for (let i = 0; i < index; i++) {
      if (names[index] === newArr[i]) {
        if (result[names[index]] === undefined) result[names[index]] = 1;
        else result[names[index]] += 1;
        newArr[index] = `${names[index]}(${result[names[index]]})`;
      }
    }
  }
  return newArr;
}

module.exports = renameFiles;
