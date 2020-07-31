/**
 * @param {number} x
 * @return {number}
 */
// 简单暴力方法
var mySqrt = function(x) {
  let res = 0;
  while (res * res <= x) {
    res++;
  }
  return res - 1;
};

// internet
// 二分法
// var mySqrt = function(x) {
//   if (x < 2) {
//       return x;
//   }
//   let left = 0, right = x, mid = (left + right) >> 1;
//   while(mid*mid !== x && mid!==left && mid!==right) {
//       mid*mid > x ? (right = mid) : (left = mid);
//       mid = (left + right) >> 1;
//   }
//   return mid;
// };

export default mySqrt;
