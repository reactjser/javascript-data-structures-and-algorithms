const MaxHeap = require('./MaxHeap');

class PriorityQueue {
  constructor() {
    this.maxHeap = new MaxHeap();
  }

  getSize() {
    return this.maxHeap.getSize();
  }

  isEmpty() {
    return this.maxHeap.isEmpty();
  }

  getFront() {
    return this.maxHeap.findMax();
  }

  enqueue(e) {
    this.maxHeap.add(e);
  }

  dequeue() {
    return this.maxHeap.extractMax();
  }
}

module.exports = PriorityQueue;
