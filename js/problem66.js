/**
 * @param {number[]} digits
 * @return {number[]}
 */
// 从最末尾开始提取出来加一  如果是9则继续提取
var plusOne = function(digits) {
  let res = [];
  let lastNum = digits.pop(); // 取最后一位
  // 如果最后一位是9则记录  并继续取上一位  直到不是9为止
  while (lastNum === 9) {
    res.unshift(0);
    lastNum = digits.pop() || 0; // 如果digits为空首位设置为0
  }
  // 加入最后一个终止的位置
  res.unshift(lastNum + 1);
  return digits.concat(res);
};

/**
 * @param {number[]} digits
 * @return {number[]}
 */
// internet solution
// var plusOne = function(digits) {
//   for (let i = digits.length - 1; i >= 0; i--) {
//       digits[i] = (digits[i] + 1) % 10;
//       if (digits[i] !== 0) return digits;
//   }

//   return [1, ...digits];
// };
