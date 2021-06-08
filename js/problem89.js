/**
 * Gray Code
 * @param {number} n
 * @return {number[]}
 */

// 题目有问题
// let grayCode = function (n) {
//     // 边界条件
//     if (n == 0) {
//         return [0]
//     }

//     let res = [0]
//     const helper = (i, path) => {
//         if (i == n) {

//             path != 0 && res.push(path)
//         } else {
//             helper(i + 1, Math.pow(2, i) + path)
//             helper(i + 1, path)
//         }

//     }
//     helper(0, 0)

//     return res
// };

// 换种写法
let grayCode = function(n) {
  let res = [0];

  // 边界条件
  if (n == 0) {
    return res;
  }

  // 上一次的结果倒序每一项加上2的i次幂 即使i项所有可能
  const helper = i => {
    if (i == n) {
      return res;
    } else {
      res = res.concat([...res].reverse().map(item => item + Math.pow(2, i)));
      return helper(i + 1);
    }
  };
  return helper(0);
};
export default grayCode;
