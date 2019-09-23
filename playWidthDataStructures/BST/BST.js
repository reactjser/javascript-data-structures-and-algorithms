class Node {
  constructor(e) {
    this.e = e;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  size() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }

  add(e) {
    this.root = this._add(this.root, e);
  }

  // 向node为根的二分搜索树中插入元素E，递归算法
  // 返回插入新节点后二分搜索树的根
  _add(node, e) {
    if (node === null) {
      this.size++;
      return new Node(e);
    }

    if (e < node.e) {
      node.left = this._add(node.left, e);
    } else if (e > node.e) {
      node.right = this._add(node.right, e);
    }

    return node;
  }

  contains(e) {
    return this._contains(this.root, e);
  }

  _contains(node, e) {
    if (node === null) {
      return false;
    }

    if (e === node.e) {
      return true;
    } else if (e < node.e) {
      return this._contains(node.left, e);
    } else {
      return this._contains(node.right, e);
    }
  }
}
