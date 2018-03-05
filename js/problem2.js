/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let result_list = null
  let add = false
  let list1 = l1
  let list2 = l2
  let current_list = null

  while (list1 || list2){
    let v1 = list1 && list1.val || 0
    let v2 = list2 && list2.val || 0
    let sum = add ? v1+v2+1 : v1+v2
    if(sum >= 10){
      add = true
    }else {
      add = false
    }
    if(sum == 9 && add){
      add = true
      sum = 0
    }
    if(result_list){
      current_list.next = new ListNode(sum%10)
      current_list = current_list.next
    }else {
      result_list = new ListNode(sum%10)
      current_list = result_list
    }
    list1 = list1&&list1.next || null
    list2 = list2&&list2.next || null
  }
  if(add){
    current_list.next = new ListNode(1)
  }
  return result_list
}