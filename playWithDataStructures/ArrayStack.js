const MyArray = require('./Array');

class ArrayStack {
  constructor(capacity) {
    this.array = new MyArray(capacity);
  }

  getSize() {
    return this.array.getSize();
  }

  isEmpty() {
    return this.array.isEmpty();
  }

  getCapacity() {
    return this.array.getCapacity();
  }

  push(e) {
    this.array.addLast(e);
  }

  pop() {
    return this.array.removeLast();
  }

  peek() {
    return this.array.getLast();
  }

  toString() {
    let res = '';
    res += `Stack: `;
    res += '[';
    for (let i = 0; i < this.array.getSize(); i++) {
      res += this.array.get(i);
      if (i !== this.array.getSize() - 1) {
        res += ', ';
      }
    }
    res += '] top';
    return res;
  }
}

module.exports = ArrayStack;
