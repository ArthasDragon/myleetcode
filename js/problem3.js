/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  var arr = s.split('')
  var obj = {}
  var max_len = arr.length ? 1 : 0
  var behind = -1
  arr.map((item,index) => {
    behind = obj[item]==undefined?behind:(behind>obj[item]?behind:obj[item])
    obj[item] = index
    max_len = max_len>=(index-behind)?max_len:(index-behind)
  })
  return max_len
};