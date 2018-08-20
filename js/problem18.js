/**
 * 4Sum
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

//初始版本  记录两两之和   效率差   没考虑排序   蠢！！

let fourOriginSum = function(nums, target) {
  let result = [];
  //不是数组返回空
  if (!Array.isArray(nums)) {
    return [];
  }
  //长度小于4返回空
  if (nums.length < 4) {
    return [];
  }
  //长度等于4 直接判断和是否等于target
  if (nums.length === 4) {
    return target === nums[0] + nums[1] + nums[2] + nums[3] ? [nums] : [];
  }

  //记录两数之和及两数对应序号 在plusObj中
  let plusObj = {};
  let len = nums.length;
  for (let i = 0; i < len - 1; ++i) {
    for (let j = i + 1; j < len; j++) {
      let plus = nums[i] + nums[j];
      if (plusObj[plus]) {
        plusObj[plus].push([i, j]);
      } else {
        plusObj[plus] = [[i, j]];
      }
    }
  }

  Object.entries(plusObj).forEach(item => {
    let minus = target - item[0];
    if (plusObj[minus]) {
      //如果target-minus同样在plusObj中  进行后续操作
      item[1].forEach(plusArr => {
        plusObj[minus].forEach(minusArr => {
          //找到plusArr中ヘminusArr中完全不同的两项
          if (minusArr.every(i => plusArr.every(p_i => p_i !== i))) {
            let res = plusArr.concat(minusArr).map(r => nums[r]);
            //判断当前result中没有完全相同的数组则push进result
            if (
              !result.some(
                it =>
                  res.every(re => it.indexOf(re) !== -1) &&
                  it.every(it_num => res.indexOf(it_num) !== -1)
              )
            ) {
              result.push(res);
            }
          }
        });
      });
    }
  });
  return result;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
let fourSum = function(nums, target) {
  let result = [];
  //不是数组或长度小于4返回空
  if (!Array.isArray(nums) || nums.length < 4) {
    return result;
  }
  //长度等于4 直接判断和是否等于target
  if (nums.length === 4) {
    return target === nums[0] + nums[1] + nums[2] + nums[3] ? [nums] : [];
  }
  let numsArr = nums.sort((a, b) => a - b);
  const len = numsArr.length;
  for (let i = 0; i < len - 3; i++) {
    for (let j = len - 1; j > i + 2; j--) {
      const minus = target - numsArr[i] - numsArr[j];
      let left = i + 1;
      let right = j - 1;
      while (left < right) {
        if (minus === numsArr[left] + numsArr[right]) {
          let res = [numsArr[i], numsArr[left], numsArr[right], numsArr[j]];
          //result中有该数组则不加入result中
          if (
            !result.some(
              r =>
                r[0] === res[0] &&
                r[1] === res[1] &&
                r[2] === res[2] &&
                r[3] === res[3]
            )
          ) {
            result.push([
              numsArr[i],
              numsArr[left],
              numsArr[right],
              numsArr[j]
            ]);
          }
          left++;
          right--;
        } else if (minus > numsArr[left] + numsArr[right]) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  return result;
};

export default fourSum;
