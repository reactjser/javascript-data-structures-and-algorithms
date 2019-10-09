class Node {
  constructor(key, value, next = null) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

class LinkedListMap {
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

  _getNode(key) {
    let cur = this.dummyHead.next;
    while (cur !== null) {
      if (cur.key === key) {
        return cur;
      }
      cur = cur.next;
    }
    return null;
  }

  contains(key) {
    return this._getNode(key) !== null;
  }

  get(key) {
    const node = this._getNode(key);
    return node === null ? null : node.value;
  }

  add(key, value) {
    const node = this._getNode(key);
    if (node === null) {
      this.dummyHead.next = new Node(key, value, this.dummyHead.next);
      this.size++;
    } else {
      node.value = value;
    }
  }

  set(key, newValue) {
    const node = this._getNode(key);
    if (node === null) {
      throw new Error(`${key} doesn't exit!`);
    }

    node.value = newValue;
  }

  remove(key) {
    let prev = this.dummyHead;
    while (prev.next !== null) {
      if (prev.next.key === key) {
        break;
      }
      prev = prev.next;
    }

    if (prev.next !== null) {
      const delNode = prev.next;
      prev.next = delNode.next;
      delNode.next = null;
      this.size--;
      return delNode.value;
    }

    return null;
  }
}
