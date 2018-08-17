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

export default lengthOfLongestSubstring;

/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {

//   let substr = "";
//   let maxLen = 0;

//   for (let i = 0; i < s.length; i += 1) {
//       const char = s.charAt(i);
//       const oldIdx = substr.indexOf(char);

//       if (oldIdx === -1) {
//           substr += char;
//       }
//       else {
//           substr = substr.slice(oldIdx+1) + char;
//       }

//       maxLen = Math.max(maxLen, substr.length);
//   }

//   return maxLen;
// };
