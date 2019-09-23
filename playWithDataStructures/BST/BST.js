const Stack = require('../../books/stack');
const Queue = require('../../books/queue');

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

  preOrderNR() {
    const stack = new Stack();
    stack.push(this.root);
    while(!stack.isEmtpy()) {
      const cur = stack.pop();
      console.log(cur.e);
      cur.right !== null && stack.push(cur.right)
      cur.left !== null && stack.push(cur.left);
    }
  }

  preOrder() {
    this._preOrder(this.root);
  }

  _preOrder(node) {
    if (node === null) {
      return;
    }

    console.log(node.e);
    this._preOrder(node.left);
    this._preOrder(node.right);
  }

  inOrder() {
    this._inOrder(this.root);
  }

  _inOrder(node) {
    if (node === null) {
      return;
    }

    this._inOrder(node.left);
    console.log(node.e);
    this._inOrder(node.right);
  }

  postOrder() {
    this._postOrder(this.root);
  }

  _postOrder(node) {
    if (node === null) {
      return;
    }

    this._postOrder(node.left);
    this._postOrder(node.right);
    console.log(node.e);
  }

  levelOrder() {
    const q = new Queue();
    q.enqueue(this.root);
    while(!q.isEmpty()) {
      const cur = q.dequeue();
      console.log(cur.e);
      cur.left !== null && q.enqueue(cur.left);
      cur.right !== null && q.enqueue(cur.right);
    }
  }
}

const bst = new BST();
const nums = [5, 3, 6, 8, 4, 2];
for (let i = 0; i < nums.length; i++) {
  bst.add(nums[i]);
}
// bst.preOrderNR();
// console.log();
// bst.preOrder();
// console.log();
// bst.inOrder();
// console.log();
// bst.postOrder();

bst.levelOrder();