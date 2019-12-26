/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  let resMap = new Map();
  let start = -1;
  let end = -1;
  // 先排序 日常套路
  intervals = intervals.sort((a, b) => a[0] - b[0]);

  // 记录每次的最后一组数据  每次只需要和该组数据比较并操作即可
  intervals.forEach(item => {
    if (end === -1) {
      [start, end] = item;
      resMap.set(start, end);
    } else if (item[0] <= end) {
      end = Math.max(item[1], end);
      resMap.set(start, end);
    } else {
      [start, end] = item;
      resMap.set(start, end);
    }
  });
  return [...resMap.keys()].map(key => [key, resMap.get(key)]);
};
