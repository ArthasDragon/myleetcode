/**
 * Scramble String
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

// 递归枚举  尝试  超时了。。
let compareMap = new Map(); // 加上缓存不超时了
let isScramble = function(s1, s2) {
  // 边界条件
  if (s1.length == 1) {
    return s1 == s2;
  }

  // 每个位置进行一次切割  换顺序和不换顺序有一个成立就成立返回true  否则进行下一个位置的操作
  for (let index = 0; index < s1.length; index++) {
    if (compareMap.get(s1 + s2)) {
      return compareMap.get(s1 + s2) == 1;
    }
    // console.log(index, s1, s2, s1.substring(index + 1), s1.substring(0, index + 1), s2.substring(index + 1), s2.substring(0, index + 1), s2.substring(0, s2.length - index - 1), s2.substring(s2.length - index - 1, s2.length))
    if (
      (isScramble(s1.substring(index + 1), s2.substring(index + 1)) &&
        isScramble(s1.substring(0, index + 1), s2.substring(0, index + 1))) ||
      (isScramble(
        s1.substring(index + 1),
        s2.substring(0, s2.length - index - 1)
      ) &&
        isScramble(
          s1.substring(0, index + 1),
          s2.substring(s2.length - index - 1, s2.length)
        ))
    ) {
      compareMap.set(s1 + s2, 1);
      return true;
    }
  }
  compareMap.set(s1 + s2, 2);
  return false;
};

export default isScramble;
