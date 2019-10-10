class MaxHeap {
  constructor() {
    this.data = [];
  }

  getSize() {
    return this.data.length;
  }

  isEmpty() {
    return this.getSize() === 0;
  }

  // 返回完全二叉树的数组表示中，一个索引所表示的元素的父亲节点的索引
  _parent(index) {
    if (index === 0) {
      throw new Error("index-0 doesn't have parent.");
    }
    return Math.trunc((index - 1) / 2);
  }

  // 返回完全二叉树的数组表示中，一个索引所表示的元素的左孩子节点的索引
  _leftChild(index) {
    return index * 2 + 1;
  }

  // 返回完全二叉树的数组表示中，一个索引所表示的元素的右孩子节点的索引
  _rightChild(index) {
    return index * 2 + 2;
  }

  _swap(arr, i, j) {
    if (i < 0 || i >= arr.length || j < 0 || j >= arr.length) {
      throw new Error('Index is illegal.');
    }

    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  _siftUp(k) {
    while (k > 0 && this.data[this._parent(k)] < this.data[k]) {
      this._swap(this.data, k, this._parent(k));
      k = this._parent(k);
    }
  }

  _siftDown(k) {
    while (this._leftChild(k) < this.getSize()) {
      let j = this._leftChild(k);
      if (j + 1 < this.getSize() && this.data[j + 1] > this.data[j]) {
        j++;
      }

      if (this.data[k] >= this.data[j]) {
        break;
      }

      this._swap(this.data, k, j);
      k = j;
    }
  }

  findMax() {
    if (this.isEmpty()) {
      throw new Error('Can not findMax when heap is empty');
    }
    return this.data[0];
  }

  // 向堆中添加元素
  add(e) {
    this.data.push(e);
    this._siftUp(this.getSize() - 1);
  }

  // 取出堆中最大元素
  extractMax() {
    const ret = this.findMax();

    this._swap(this.data, 0, this.getSize() - 1);
    this.data.pop();

    this._siftDown(0);

    return ret;
  }
}

const heap = new MaxHeap();
