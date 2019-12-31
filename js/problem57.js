/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

// 初始答案
var insert = function(intervals, newInterval) {
  let newStart = newInterval[0];
  let newEnd = newInterval[1];
  let len = intervals.length;

  // 遍历特殊情况
  if (!len >= 1) {
    return [newInterval];
  }

  if (intervals[len - 1][1] < newStart) {
    return intervals.concat([newInterval]);
  }

  if (intervals[0][0] > newEnd) {
    return [newInterval].concat(intervals);
  }

  if (intervals[0][0] == newEnd) {
    intervals[0][0] = newInterval[0];
    return intervals;
  }

  if (intervals[len - 1][1] == newStart) {
    intervals[len - 1][1] = newInterval[1];
    return intervals;
  }

  // 二分法确定左侧临界数组下标
  let mid = Math.floor(len / 2);
  let left = 0;
  let right = intervals.length - 1;

  while (left < right) {
    mid = Math.floor(left + (right - left) / 2);
    if (intervals[mid][1] < newStart) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  let tempLeft = left;

  // 二分法确定右侧临界数组下标
  left = 0;
  right = intervals.length - 1;
  while (left < right) {
    mid = Math.floor(left + (right - left) / 2);
    if (intervals[mid][0] > newEnd) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  let tempRight = right;

  // 确定实际左右临界下标
  if (tempRight === len - 1) {
    intervals[tempRight][0] > newEnd && (tempRight -= 1);
  } else {
    tempRight -= 1;
  }

  // 确定合并后数组
  let newArr = [
    Math.min(newStart, intervals[tempLeft][0]),
    Math.max(newEnd, intervals[tempRight][1])
  ];

  // 将左右下标范围内的项替换为合并后数组
  intervals.splice(tempLeft, tempRight - tempLeft + 1, newArr);

  return intervals;
};
