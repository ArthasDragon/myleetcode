function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * Merge Two Sorted Lists
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let mergeTwoLists = function(l1, l2) {
  let temp = new ListNode(1);
  let cur = temp;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next;
  }
  if (l1) {
    cur.next = l1;
  } else {
    cur.next = l2;
  }
  return temp.next;
};

export default mergeTwoLists;
