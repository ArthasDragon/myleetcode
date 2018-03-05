/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  var total_arr = []
  var numb = null
  while (nums1.length && nums2.length){
    var value1 = nums1[0]
    var value2 = nums2[0]
    if(value1<=value2){
      total_arr.push(value1)
      nums1.shift()
    }else {
      total_arr.push(value2)
      nums2.shift()
    }
  }
  total_arr = total_arr.concat(nums1,nums2)
  var len = total_arr.length
  if(len%2==0){
    numb = (total_arr[len/2 - 1] + total_arr[len/2])/2
  }else {
    numb = total_arr[(len-1)/2]
  }
  return numb
};