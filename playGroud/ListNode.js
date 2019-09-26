function ListNode(val) {
  if (Array.isArray(val)) {
    if (val.length === 0) {
      throw new Error('arr can not be empty.');
    }
    this.val = val[0];
    let cur = this;
    for (let i = 1; i < val.length; i++) {
      cur.next = new ListNode(val[i]);
      cur = cur.next;
    }
  } else {
    this.val = val;
    this.next = null;
  }
}

ListNode.prototype.toString = function() {
  let res = '';
  let cur = this;
  while (cur !== null) {
    res += `${cur.val} -> `;
    cur = cur.next;
  }
  res += 'null';
  return res;
};

module.exports = ListNode;
