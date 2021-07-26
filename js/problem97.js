/**
 * Interleaving String
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
let cache = {};
// 硬 递归
const isInterleave = function(s1, s2, s3) {
  // 先看缓存中有没有这组结果  有的话直接返回
  if (cache[`${s1}-${s2}-${s3}`]) {
    return cache[`${s1}-${s2}-${s3}`] == 1;
  }

  // 边界条件判断
  if (s3.length != s1.length + s2.length) {
    return false;
  }
  if (!s3.length) {
    return true;
  }

  if (s3.length == 1 && (s3 == s1 || s3 == s2)) {
    return true;
  }

  // 分情况返回结果  并存入缓存中
  if (s3[0] == s2[0] || s3[0] == s1[0]) {
    if (s3[0] == s2[0] && s3[0] == s1[0]) {
      // 如果前两个字符串的首字母都和第三个的首字母相同
      cache[`${s1}-${s2}-${s3}`] =
        isInterleave(s1.substr(1), s2, s3.substr(1)) ||
        isInterleave(s1, s2.substr(1), s3.substr(1))
          ? 1
          : 2;
      return cache[`${s1}-${s2}-${s3}`] == 1;
    } else if (s3[0] == s1[0]) {
      // 如果第一个字符串的首字母和第三个的首字母相同
      cache[`${s1}-${s2}-${s3}`] = isInterleave(s1.substr(1), s2, s3.substr(1))
        ? 1
        : 2;
      return cache[`${s1}-${s2}-${s3}`] == 1;
    } else {
      // 如果第二个字符串的首字母和第三个的首字母相同
      cache[`${s1}-${s2}-${s3}`] = isInterleave(s1, s2.substr(1), s3.substr(1))
        ? 1
        : 2;
      return cache[`${s1}-${s2}-${s3}`] == 1;
    }
  } else {
    return false;
  }
};

export default isInterleave;
