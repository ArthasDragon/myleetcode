/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
const findSubstring = function(s, words) {
  let str = words.join("|");
  let reg = new RegExp(`(${str}){2,}`, "g");
  let result = [];
  let matchList = reg.exec(s);
  while (matchList) {
    result.push(matchList.index);
    matchList = reg.exec(s);
  }
  return result;
};

export default findSubstring;
