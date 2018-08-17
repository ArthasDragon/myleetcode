/**
 * Longest Substring Without Repeating Characters
 * @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstring = function(s) {
  let arr = s.split("");
  let obj = {};
  let max_len = arr.length ? 1 : 0;
  let behind = -1;
  arr.map((item, index) => {
    //behind  记录上段字符串结束位置
    behind =
      obj[item] == undefined ? behind : behind > obj[item] ? behind : obj[item];
    //记录item最后出现的位置
    obj[item] = index;
    max_len = max_len >= index - behind ? max_len : index - behind;
  });
  return max_len;
};
