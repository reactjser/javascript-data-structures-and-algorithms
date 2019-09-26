const ListNode = require('./ListNode');

var removeElements = function(head, val) {
  const dummyHead = new ListNode(-1);
  dummyHead.next = head;
  let prev = dummyHead;
  while (prev.next != null) {
    if (prev.next.val === val) {
      prev.next = prev.next.next;
    } else {
      prev = prev.next;
    }
  }

  return dummyHead.next;
};

const head = new ListNode([1, 2, 6, 3, 4, 5, 6]);
const result = removeElements(head, 6);
console.log(result.toString());
