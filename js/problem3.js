/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstring = function(s) {
  let arr = s.split("");
  let obj = {};
  let max_len = arr.length ? 1 : 0;
  let behind = -1;
  arr.map((item, index) => {
    behind =
      obj[item] == undefined ? behind : behind > obj[item] ? behind : obj[item];
    obj[item] = index;
    max_len = max_len >= index - behind ? max_len : index - behind;
  });
  return max_len;
};
