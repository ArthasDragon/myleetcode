/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  // 删除末尾的连续空格
  s = s.trim();

  // 判断是否为空
  if (!s.length) {
    return 0;
  }

  // 从后往前记录到第一个空格时的长度
  let i = s.length - 1;
  for (; i >= 0; i--) {
    if (s[i] === " ") {
      return s.length - i - 1;
    }
  }

  // 若前面没返回代表整体没有空格
  return s.length;
};
