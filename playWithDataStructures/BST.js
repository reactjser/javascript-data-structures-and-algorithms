const Stack = require('./ArrayStack');
const Queue = require('./LoopQueue');

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

  remove(e) {
    this.root = this._remove(this.root, e);
  }

  _remove(node, e) {
    if (node === null) {
      return null;
    }

    if (e < node.e) {
      node.left = this._remove(node.left);
      return node;
    } else if (e > node.e) {
      node.right = this._remove(node.right);
      return node;
    } else {
      if (node.left === null) {
        const rightNode = node.right;
        node.right = null;
        this.size--;
        return rightNode;
      }
      if (node.right === null) {
        const leftNode = node.left;
        node.left = null;
        this.size--;
        return leftNode;
      }

      // 待删除节点左右子树均不为空
      const successor = this.minimum(node.right);
      successor.right = this.removeMin(node.right);
      // this.size++;

      successor.left = node.left;
      node.left = node.right = null;
      // this.size--;
      return successor;
    }
  }

  minimum() {
    if (this.size === 0) {
      throw new Error('BST is empty!');
    }
    return this._minimum(this.root);
  }

  _minimum(node) {
    if (node.left === null) {
      return node;
    }
    return this._minimum(node.left);
  }

  removeMin() {
    const ret = this.minimum();
    this._removeMin(this.root);
    return ret;
  }

  _removeMin(node) {
    if (node.left === null) {
      const rightNode = node.right;
      node.right = null;
      this.size--;
      return rightNode;
    }

    node.left = this._removeMin(node.left);
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
    while (!stack.isEmtpy()) {
      const cur = stack.pop();
      console.log(cur.e);
      cur.right !== null && stack.push(cur.right);
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
    while (!q.isEmpty()) {
      const cur = q.dequeue();
      console.log(cur.e);

      if (cur.left !== null) {
        q.enqueue(cur.left);
      }
      if (cur.right !== null) {
        q.enqueue(cur.right);
      }
    }
  }
}

const bst = new BST();
const nums = [5, 3, 6, 8, 4, 2];
for (let i = 0; i < nums.length; i++) {
  bst.add(nums[i]);
}
// bst.remove(5)
// bst.preOrderNR();
// console.log();
// bst.preOrder();
// console.log();
// bst.inOrder();
// console.log();
// bst.postOrder();
bst.removeMin()
bst.levelOrder();
