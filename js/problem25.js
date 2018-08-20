/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Reverse Nodes in k-Group
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const reverseKGroup = function(head, k) {
  if (!head) {
    return null;
  }
  let result = head;
  let pre = null;
  let tempKListObj = isKHead(head, k);
  if (!tempKListObj.value) {
    return result;
  } else {
    result = tempKListObj[k - 1];
  }
  while (tempKListObj.value) {
    let next = tempKListObj[k - 1].next || null;
    if (pre) {
      pre.next = tempKListObj[k - 1];
    }
    pre = tempKListObj[0];
    pre.next = next;
    for (let i = k - 1; i > 0; --i) {
      tempKListObj[i].next = tempKListObj[i - 1];
    }
    tempKListObj = next ? isKHead(next, k) : { value: false };
  }
  return result;
};

const isKHead = function(list, k) {
  let tempKListObj = { value: true, "0": list };
  for (let i = 0; i < k - 1; ++i) {
    if (!list.next) {
      tempKListObj["value"] = false;
      return tempKListObj;
    }
    list = tempKListObj[i + 1] = list.next;
  }
  return tempKListObj;
};

export default reverseKGroup;
