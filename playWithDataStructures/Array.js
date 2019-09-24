class MyArray {
  // 构造函数，传入数组容量capacity构造Array
  constructor(capacity = 10) {
    this.data = new Array(capacity);
    this.size = 0;
  }

  // 获取数组中的元素个数
  getSize() {
    return this.size;
  }

  // 获取数组的容量
  getCapacity() {
    return this.data.length;
  }

  // 返回数组是否为空
  isEmpty() {
    return this.size === 0;
  }

  // 在第index个位置插入一个新元素e
  add(index, e) {
    if (index < 0 || index > this.size) {
      throw new RangeError(
        `Add failed. Require index >=0 and index <= ${this.size}`
      );
    }

    if (this.size === this.data.length) {
      // 数组扩容
      this.resize(2 * this.data.length);
    }

    for (let i = this.size - 1; i >= index; i--) {
      this.data[i + 1] = this.data[i];
    }

    this.data[index] = e;
    this.size++;
  }

  // 在所有元素后添加一个新元素
  addLast(e) {
    this.add(this.size, e);
  }

  // 在所有元素前添加一个新元素
  addFirst(e) {
    this.add(0, e);
  }

  // 获取index索引位置的元素
  get(index) {
    if (index < 0 || index >= this.size) {
      throw new RangeError('Get failed. Index is illegal.');
    }
    return this.data[index];
  }

  // 获取最后一个索引位置的元素
  getLast() {
    return this.get(this.size - 1);
  }

  // 获取第一个索引位置的元素
  getFirst() {
    return this.get(0);
  }

  // 修改index索引位置的元素为e
  set(index, e) {
    if (index < 0 || index >= this.size) {
      throw new RangeError('Set failed. Index is illegal.');
    }
    this.data[index] = e;
  }

  // 查找数组中是否有元素e
  contains(e) {
    for (let i = 0; i < this.size; i++) {
      if (this.data[i] === e) {
        return true;
      }
    }
    return false;
  }

  // 查找数组中元素e所在的索引，如果不存在元素e，则返回-1
  find(e) {
    for (let i = 0; i < this.size; i++) {
      if (this.data[i] === e) {
        return i;
      }
    }
    return -1;
  }

  // 从数组中删除index位置的元素，返回删除的元素
  remove(index) {
    if (index < 0 || index >= this.size) {
      throw new RangeError('Remove failed. Index is illegal.');
    }
    const ret = this.data[index];

    for (let i = index + 1; i < this.size; i++) {
      this.data[i - 1] = this.data[i];
    }

    // 清除引用
    this.data[this.size] = undefined;
    this.size--;

    // 注：此处使用整除
    if (
      this.size === this.data.length / 4 &&
      Math.floor(this.data.length / 2) !== 0
    ) {
      // 数组缩容
      this.resize(Math.floor(this.data.length / 2));
    }
    return ret;
  }

  // 从数组中删除第一个元素，返回删除的元素
  removeFirst() {
    return this.remove(0);
  }

  // 从数组中删除最后一个元素，返回删除的元素
  removeLast() {
    return this.remove(this.size - 1);
  }

  // 从数组中删除元素e
  removeElement(e) {
    const index = this.find(e);
    if (index !== -1) {
      this.remove(index);
    }
  }

  // 更改数组容量
  resize(newCapacity) {
    let newData = new Array(newCapacity);
    for (let i = 0; i < this.size; i++) {
      newData[i] = this.data[i];
    }
    this.data = newData;
  }

  toString() {
    let res = '';
    res += `Array: size = ${this.size}, capacity = ${this.data.length}\n`;
    res += '[';
    for (let i = 0; i < this.size; i++) {
      res += this.data[i];
      if (i !== this.size - 1) {
        res += ', ';
      }
    }
    res += ']';
    return res;
  }
}

module.exports = MyArray;
