/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

// 1 超时  暴力算法
// var myPow = function(x, n) {
//   let result = 1;
//   let flag = n > 0 ? true : false;
//   let absN = Math.abs(n);
//   for (let i = 0; i < absN; i++) {
//     result *= x;
//   }
//   return flag ? result : 1 / result;
// };

// 2  折半平方

// var myPow = function(x, n) {
//   let flag = n > 0 ? true : false;
//   let absN = Math.abs(n);
//   let isEven = absN % 2 === 0;
//   if (absN === 1) {
//     return flag ? x : 1 / x;
//   }
//   if (n === 0) {
//     return 1;
//   }
//   let mid = isEven ? absN / 2 : Math.floor(absN / 2);
//   let midPow = myPow(x, mid);
//   let res = isEven ? midPow * midPow : midPow * midPow * x;
//   return flag ? res : 1 / res;
// };

// 3  折半平方优化

var myPow = function(x, n) {
  let res = 1;
  for (let i = Math.abs(n); i > 0; i = Math.floor(i / 2)) {
    if (i % 2 !== 0) {
      res *= x;
    }
    x *= x;
  }
  return n > 0 ? res : 1 / res;
};

export default myPow;
