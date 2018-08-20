/**
 * Definition for singly-linked list.
 *
 *
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * Merge k Sorted Lists
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
let mergeKLists = function(lists) {
  let len = lists.length;
  if (!len) {
    return null;
  }
  if (len === 1) {
    return lists[0];
  }
  let left = 0;
  let right = len - 1;
  let curList = [];
  while (left <= right) {
    if (left === right) {
      curList.push(lists[left]);
    } else {
      curList.push(merge2Lists(lists[left], lists[right]));
    }
    left++;
    right--;
  }
  return mergeKLists(curList);
};

/**
 *将两个有序链表合成一个有序链表并返回
 * @param {ListNode} list1
 * @param {ListNode} list2
 */
let merge2Lists = function(list1, list2) {
  let originListNode = new ListNode("");
  let curListNode = originListNode;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      curListNode.next = list1;
      list1 = list1.next;
    } else {
      curListNode.next = list2;
      list2 = list2.next;
    }
    curListNode = curListNode.next;
  }
  curListNode.next = list1 ? list1 : list2;
  return originListNode.next;
};
