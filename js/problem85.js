/**
 * Maximal Rectangle
 * @param {character[][]} matrix
 * @return {number}
 */
let maximalRectangle = function(matrix) {
  let res = 0;
  // 边界条件判断
  if (!matrix.length) {
    return res;
  }
  if (!matrix[0].length) {
    return res;
  }

  // 确定行数、列数
  const rowNum = matrix.length;
  const colNum = matrix[0].length;

  // 记录坐标对应的各个方向的面积情况
  let resMap = new Map();
  let flag = ``; // 当前点的坐标标识
  let curResObj = []; // 当前点的面积信息
  let lastResObj = []; // 上方的点的面积信息
  let curJ = 0;
  for (let i = 0; i < rowNum; i++) {
    for (let j = 0; j < colNum; j++) {
      flag = `${i}-${j}`; // 更新当前点的坐标标识
      curResObj = []; // 重置当前点的面积信息
      lastResObj = resMap.get(`${i - 1}-${j}`) || []; // 获取上方的点的面积信息
      curJ = j;
      // 如果当前项是0
      if (!matrix[i][j]) {
        resMap.set(flag, null);
        continue;
      }

      // 从当前点向右遍历  遇到0就停止
      while (curJ < colNum && matrix[i][curJ] == 1) {
        let substract = curJ - j; // 记录遍历到的点和当前点之间的距离
        let tmpRes = substract + 1 + (lastResObj[substract] || 0); // 将当前遍历到的最大面积算出来
        res = Math.max(tmpRes, res); // 与结果比较  记录最大的结果
        curResObj[substract] = tmpRes; // 记录到面积信息中
        curJ++;
      }
      resMap.set(flag, curResObj); // 记录到总面积信息中
    }
  }

  return res;
};

export default maximalRectangle;

// 路径规划、单调栈
// https://leetcode-cn.com/problems/maximal-rectangle/solution/shu-zhi-zhu-hua-dong-tai-gui-hua-fu-za-d-k729/
// https://leetcode-cn.com/problems/maximal-rectangle/solution/jian-dan-si-lu-11xing-dai-ma-chao-99-by-8hhlv/
