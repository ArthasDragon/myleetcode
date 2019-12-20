/**
 * Trapping Rain Water
 * @param {number[]} height
 * @return {number}
 */

//origin solution  Time Limit Exceeded
// let trap = function(height) {
//   if (height.length <= 2) {
//     return 0;
//   }
//   //初始化参数
//   let result = 0;
//   let len = height.length;
//   let topMap = { value: 0 };

//   //记录最高项的值和对应index
//   //find the topest index/value
//   for (let i = 0; i < len; i++) {
//     if (height[i] >= topMap.value) {
//       topMap["value"] = height[i];
//       topMap["index"] = i;
//     }
//   }
//   let topValue = topMap.value;
//   let topIndex = topMap.index;

//   //traverse every height sideway from index
//   for (let i = topValue; i > 0; i--) {
//     let curSanLen = 0;
//     for (let left = topIndex - 1; left >= 0; left--) {
//       if (height[left] >= i) {
//         result += curSanLen;
//         curSanLen = 0;
//       } else {
//         curSanLen++;
//       }
//     }
//     curSanLen = 0;

//     for (let right = topIndex + 1; right < len; right++) {
//       if (height[right] >= i) {
//         result += curSanLen;
//         curSanLen = 0;
//       } else {
//         curSanLen++;
//       }
//     }
//   }
//   return result;
// };

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  // 从大到小排序
  let sortHeight = sortArr(height);

  let total = 0;
  let heightIndexMap = {};
  //  将每个高度的序号列表放到map中
  height.forEach((item, index) => {
    total += item;
    if (heightIndexMap[item]) {
      heightIndexMap[item].push(index);
    } else {
      heightIndexMap[item] = [index];
    }
  });

  let start = -1;
  let end = -1;
  let area = 0;
  // 计算总面积
  sortHeight.forEach(item => {
    let itemSortIndexArr = sortArr(heightIndexMap[item]);
    let len = itemSortIndexArr.length;
    let tempStart = itemSortIndexArr[len - 1];
    let tempEnd = itemSortIndexArr[0];

    if (start === -1) {
      start = tempStart;
      end = tempEnd;
      area += item * (end - start + 1);
    } else {
      if (tempStart < start) {
        area += item * (start - tempStart);
        start = tempStart;
      }
      if (tempEnd > end) {
        area += item * (tempEnd - end);
        end = tempEnd;
      }
    }
  });

  // 总面积-总和
  return area - total;
};

const sortArr = arr => arr.sort((a, b) => b - a);

export default trap;
