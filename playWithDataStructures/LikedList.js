class Node {
  constructor(e, next = null) {
    this.e = e;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.dummyHead = new Node();
    this.size = 0;
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }

  add(index, e) {
    if (index < 0 || index > this.size) {
      throw new Error('Add failed. Illegal index.');
    }
    let prev = this.dummyHead;
    for (let i = 0; i < index; i++) {
      prev = prev.next;
    }
    prev.next = new Node(e, prev.next);
    this.size++;
  }

  addFirst(e) {
    this.add(0, e);
  }

  addLast(e) {
    this.add(this.size, e);
  }

  get(index) {
    if (index < 0 || index > this.size) {
      throw new Error('Get failed. Illegal index.');
    }
    let prev = this.dummyHead;
    for (let i = 0; i < index; i++) {
      prev = prev.next;
    }
    return prev.next.e;
  }

  getFirst() {
    return this.get(0);
  }

  getLast() {
    return this.get(this.size - 1);
  }

  set(index, e) {
    if (index < 0 || index > this.size) {
      throw new Error('Set failed. Illegal index.');
    }
    let cur = this.dummyHead.next;
    for (let i = 0; i < index; i++) {
      cur = cur.next;
    }
    cur.e = e;
  }

  contains(e) {
    let cur = this.dummyHead.next;
    while (cur !== null) {
      if (cur.e === e) {
        return true;
      }
      cur = cur.next;
    }
    return false;
  }

  remove(index) {
    if (index < 0 || index > this.size) {
      throw new Error('Remove failed. Illegal index.');
    }
    let prev = this.dummyHead;
    for (let i = 0; i < index; i++) {
      prev = prev.next;
    }
    const retNode = prev.next;
    prev.next = retNode.next;
    retNode.next = null;
    this.size--;
    return retNode.e;
  }

  removeFirst() {
    return this.remove(0);
  }

  removeLast() {
    return this.remove(this.size - 1);
  }

  toString() {
    let res = '';
    let cur = this.dummyHead.next;
    while (cur != null) {
      res += `${cur.e} -> `;
      cur = cur.next;
    }

    res += 'null';
    return res;
  }
}

module.exports = LinkedList;
