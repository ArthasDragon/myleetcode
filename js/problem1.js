/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let obj = {}
  let value = []
  nums.map((item,index) => {
    obj[item] = index + 1
  })
  for(let i=0,len=nums.length; i<len; ++i){
    let pos = obj[target-nums[i]]
    if(pos && pos!=i+1){
      value = [pos-1,i]
      return value
    }
  }
}
console.log(twoSum([2,4,6,8],14))