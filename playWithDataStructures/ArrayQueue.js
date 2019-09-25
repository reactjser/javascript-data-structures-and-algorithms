const MyArray = require('./Array');

class ArrayQueue {
  constructor(capacity) {
    this.array = new MyArray(capacity);
  }

  getSize() {
    return this.array.get();
  }

  isEmpty() {
    return this.array.isEmpty();
  }

  getCapacity() {
    return this.array.getCapacity();
  }

  enqueue(e) {
    this.array.addLast(e);
  }

  dequeue() {
    return this.array.removeFirst();
  }

  getFront() {
    return this.array.getFirst();
  }

  toString() {
    let res = '';
    res += `Queue: `;
    res += 'front [';
    for (let i = 0; i < this.array.getSize(); i++) {
      res += this.array.get(i);
      if (i !== this.array.getSize() - 1) {
        res += ', ';
      }
    }
    res += '] tail';
    return res;
  }
}

module.exports = ArrayQueue;
