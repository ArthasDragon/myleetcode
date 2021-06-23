/**
 * Reverse Linked List II
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
const reverseBetween = function(head, left, right) {
  let res = {};
  let cur = null;
  let rightNode = null;
  res.next = head;

  // 定位需要排序的链表之前的那一项
  for (let i = 0; i < left; i++) {
    cur = cur ? cur.next : res;
  }
  // 定位需要排序的链表的最后一项
  for (let i = 0; i < right + 1; i++) {
    rightNode = rightNode ? rightNode.next : res;
  }
  // 依次换位置即可
  while (left < right) {
    let tmp = cur.next;
    cur.next = cur.next.next;
    tmp.next = rightNode.next;
    rightNode.next = tmp;
    left++;
  }

  return res.next;
};

export default reverseBetween;
