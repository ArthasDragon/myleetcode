/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  let arr = []; // 结果每一位的序号数组
  let nArr = []; // ['1','2','3'... 'n']
  let res = []; // 结果每一位的字符串数组
  let m = n;
  for (let i = 1; i <= n; i++) {
    nArr.push(i + "");
  }
  // 确定每一位的序号  当可以整除的时候证明后面从大到小排序即可
  while (k !== 0) {
    m--;
    let nFactorial = getFactorial(m);
    let index = Math.floor(k / nFactorial);
    k = k % nFactorial;
    arr.push(k === 0 ? index - 1 : index);
  }

  for (let i = 0; i < n; i++) {
    res.push(i <= arr.length - 1 ? nArr.splice(arr[i], 1)[0] : nArr.pop());
  }
  return res.join("");
};

// 计算n的阶乘
let getFactorial = n => {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
};

export default getPermutation;

// internet better solution

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
// var getPermutation = function (n, k) {
//   const unused = Array.from({ length: n }, (_, i) => i + 1);
//   let x = unused.reduce((a, b) => a * b);
//   let str = "";
// 初始条件k--很关键  康拓展开！！！！！
//   for (k--; n > 0; n--) {
//       x /= n;
//       str += unused.splice(Math.floor(k / x), 1)[0];
//       k %= x;
//   }
//   return str;
// };
