/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// 滑动窗口  最小覆盖子串
// https://leetcode-cn.com/problems/minimum-window-substring/solution/zui-xiao-fu-gai-zi-chuan-by-leetcode-solution/

var minWindow = function(s, t) {
  let tLen = t.length;

  // 记录t字符串中每个字符的个数
  let alphabetMap = {}; // t中每种字符的个数
  let missingType = 0; // 还没有匹配完的t中的字符种类数
  for (let i = 0; i < tLen; i++) {
    let curAlph = t[i];
    if (alphabetMap[curAlph]) {
      alphabetMap[curAlph] += 1;
    } else {
      alphabetMap[curAlph] = 1;
      missingType++;
    }
  }

  let leftP = 0; // 左侧指针
  let rightP = 0; // 右侧指针
  let res = "";

  // 遍历到右侧指针到末尾为止
  while (rightP < s.length) {
    let curAlph = s[rightP]; // 当前字符
    if (alphabetMap[curAlph] !== undefined) {
      alphabetMap[curAlph]--; // 如果hashmap中有该字符 递减  可以为负数！！！
      if (alphabetMap[curAlph] === 0) {
        missingType--; // 刚好减到0 则missingType减一
      }
    }
    // 完全包含时
    while (missingType === 0) {
      let curStr = s.substring(leftP, rightP + 1);
      // 如果当前长度更小 更新res
      if (!res.length || res.length > curStr.length) {
        res = curStr;
      }
      let leftStr = s[leftP];
      if (alphabetMap[leftStr] !== undefined) {
        // 如果t中包含该字符
        alphabetMap[leftStr]++;
        if (alphabetMap[leftStr] > 0) {
          // 如果刚好加完大于0了 则missingtype加一
          missingType++;
        }
      }
      leftP++;
    }
    rightP++;
  }

  return res;
};

export default minWindow;
