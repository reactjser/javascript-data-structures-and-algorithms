class LoopQueue {
  constructor(capacity = 10) {
    this.data = new Array(capacity + 1);
    this.front = 0;
    this.tail = 0;
  }

  getCapacity() {
    return this.data.length - 1;
  }

  isEmpty() {
    return this.front === this.tail;
  }

  isFull() {
    return (this.tail + 1) % this.data.length === this.front;
  }

  getSize() {
    return this.tail >= this.front
      ? this.tail - this.front
      : this.tail - this.front + this.data.length;
  }

  enqueue(e) {
    if (this.isFull()) {
      this.resize(this.getCapacity() * 2);
    }

    this.data[this.tail] = e;
    this.tail = (this.tail + 1) % this.data.length;
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error('Cannot dequeue from an empty queue.');
    }

    const ret = this.data[this.front];
    this.data[this.front] = undefined;
    this.front = (this.front + 1) % this.data.length;

    if (
      this.getSize() === this.getCapacity() / 4 &&
      Math.trunc(this.getCapacity() / 2) !== 0
    ) {
      this.resize(Math.trunc(this.getCapacity() / 2));
    }

    return ret;
  }

  getFront() {
    if (this.isEmpty()) {
      throw new Error('Queue is empty.');
    }
    return this.data[this.front];
  }

  resize(newCapacity) {
    const newData = new Array(newCapacity + 1);
    for (let i = 0; i < this.getSize(); i++) {
      newData[i] = this.data[(i + this.front) % this.data.length];
    }
    this.data = newData;
    this.front = 0;
    this.tail = this.getSize();
  }

  toString() {
    let res = '';
    res += `Queue: size = ${this.getSize()}, capacity = ${this.getCapacity()}\n`;
    res += 'front [';
    for (let i = this.front; i !== this.tail; i = (i + 1) % this.data.length) {
      res += this.data[i];
      if ((i + 1) % this.data.length !== this.tail) {
        res += ', ';
      }
    }
    res += '] tail';
    return res;
  }
}

module.exports = LoopQueue;
