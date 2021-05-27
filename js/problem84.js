/**
 * Largest Rectangle in Histogram
 * @param {number[]} heights
 * @return {number}
 */

// 看完答案来的。。 https://leetcode-cn.com/problems/largest-rectangle-in-histogram/solution/dong-hua-yan-shi-dan-diao-zhan-84zhu-zhu-03w3/
// 单调栈
let largestRectangleArea = function(heights) {
  let len = heights.length;
  // 边界条件特殊处理
  if (!len) {
    return 0;
  }
  if (len == 1) {
    return heights[0];
  }

  let res = 0; // 保留结果
  let stack = []; // 建立栈
  for (let i = 0; i < len; i++) {
    // 如果栈中的最后一项高度大于当前的高度  取出并计算其所能形成的最大矩形面积
    while (stack.length && stack[stack.length - 1].height > heights[i]) {
      let last = stack[stack.length - 1]; // 栈中最后一项
      // 计算最后一项所能形成的最大矩形面积
      res = Math.max(
        res,
        last.height *
          (i - (stack.length > 1 ? stack[stack.length - 2].index : -1) - 1)
      );
      // 移除最后一项
      stack.pop();
    }
    stack.push({ index: i, height: heights[i] });
  }

  // 最后栈中剩余的项依次计算面积
  stack.forEach((item, index) => {
    if (index == 0) {
      res = Math.max(res, item.height * (stack[stack.length - 1].index + 1));
    } else {
      res = Math.max(
        res,
        item.height * (stack[stack.length - 1].index - stack[index - 1].index)
      );
    }
  });

  return res;
};

export default largestRectangleArea;
