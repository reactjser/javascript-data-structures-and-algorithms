const ListNode = require('./ListNode');

var mergeTwoLists = function(l1, l2) {
  let l1Cur = l1;
  let l2Cur = l2;
  let dummyHead = new ListNode();
  let prev = dummyHead;
  while (l1Cur !== null || l2Cur !== null) {
    if (!l1Cur) {
      prev.next = new ListNode(l2Cur.val);
      l2Cur = l2Cur.next;
    } else if (!l2Cur) {
      prev.next = new ListNode(l1Cur.val);
      l1Cur = l1Cur.next;
    } else if (l1Cur.val <= l2Cur.val) {
      prev.next = new ListNode(l1Cur.val);
      l1Cur = l1Cur.next;
    } else {
      prev.next = new ListNode(l2Cur.val);
      l2Cur = l2Cur.next;
    }
    prev = prev.next;
  }
  return dummyHead.next;
};

const l1 = new ListNode([1, 2, 4]);
const l2 = new ListNode([1, 3, 4]);
const result = mergeTwoLists(l1, l2);
console.log(result.toString());
