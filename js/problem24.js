/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (!head) {
    return [];
  }
  let result = head.next ? head.next : head;

  let pre = null;

  while (head && head.next) {
    let cur = head.next.next;
    if (pre) {
      pre.next = head.next;
    }
    pre = head;
    head.next.next = head;
    head.next = cur;
    head = cur;
  }

  return result;
};

export default swapPairs;
