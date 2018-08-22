/**
 * Longest Valid Parentheses
 * @param {string} s
 * @return {number}
 */

//original  version
// let longestValidParentheses = function(s) {
//   if (!s.length) {
//     return 0;
//   }
//   let len = s.length;
//   let result = 0;
//   for (let i = 0; i < len; ++i) {
//     result = Math.max(result, getPartLongestValidParenthese(s.slice(i)));
//   }
//   return result;
// };

// /**
//  * 取得s从头开始的最长合理字符串长度
//  * @param {string} s
//  */
// let getPartLongestValidParenthese = function(s) {
//   let leftNum = 0;
//   let rightNum = 0;
//   let maxLength = 0;
//   let result = 0;
//   let curIndex = 0;
//   let curStr = s.charAt(curIndex);
//   while (curStr && leftNum >= rightNum) {
//     if (curStr === "(") {
//       leftNum++;
//     } else {
//       rightNum++;
//     }
//     maxLength++;
//     curIndex++;
//     curStr = s.charAt(curIndex);
//     if (leftNum === rightNum) {
//       result = maxLength;
//     }
//   }
//   return result;
// };

//secondary  version
let longestValidParentheses = function(s) {
  if (!s.length) {
    return 0;
  }
  let result = 0;
  let curIndex = 0;
  let curChar = s.charAt(0);

  let leftIndexList = []; //临时左括号index记录
  let completeLengthMap = {}; //各个起始位置开始有效字符串总长度
  let curStartIndex = -1; //记录当前小块起始位置
  let lastStartIndex = -1; //记录上个有效字符串整体起始位置

  //从头到尾遍历s
  while (curChar) {
    if (curChar === "(") {
      leftIndexList.push(curIndex);
    } else {
      if (!leftIndexList.length) {
        lastStartIndex = curIndex;
      } else {
        let curPartLen = curIndex - leftIndexList.pop() + 1;
        if (leftIndexList.length) {
          curStartIndex = leftIndexList[leftIndexList.length - 1];
        } else {
          curStartIndex = lastStartIndex;
        }
        if (completeLengthMap[curStartIndex]) {
          completeLengthMap[curStartIndex] += curPartLen;
        } else {
          completeLengthMap[curStartIndex] = curPartLen;
        }
      }
    }
    curChar = s.charAt(++curIndex);
  }
  Object.values(completeLengthMap).forEach(item => {
    result = Math.max(result, item);
  });

  return result;
};

export default longestValidParentheses;

/**
 * other's better solution
 * @param {string} s
 * @return {number}
 */
// var longestValidParentheses = function(s) {
//   // Using dp[i] to store the length of the longest valid parenthesis substring ending with s[i]
//   let dp = [];

//   // maxLength updates as dp grows
//   let maxLength = 0;

//   // Find the longest valid parenthesis substring vai dynamic programming
//   for (let i = 0; i < s.length; i++) {
//     if (i >= 1 && s[i] === ")" && s[i - 1] === "(") {
//       dp.push((i >= 2 ? dp[i - 2] : 0) + 2);
//       maxLength = maxLength >= dp[i] ? maxLength : dp[i];
//     } else if (
//       i >= 1 &&
//       s[i] === ")" &&
//       s[i - 1] === ")" &&
//       i - dp[i - 1] - 1 >= 0 &&
//       s[i - dp[i - 1] - 1] == "("
//     ) {
//       dp.push(
//         dp[i - 1] + (i - dp[i - 1] - 2 >= 0 ? dp[i - dp[i - 1] - 2] : 0) + 2
//       );
//       maxLength = maxLength >= dp[i] ? maxLength : dp[i];
//     } else {
//       dp.push(0);
//     }
//   }

//   return maxLength;
// };
