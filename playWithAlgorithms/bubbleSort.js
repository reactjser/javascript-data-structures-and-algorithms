const SortTestHelper = require('./utils/sortTestHelper');
const sortTestHelper = new SortTestHelper();

// 冒泡排序
const bubbleSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
};

const n = 100000;
const a = sortTestHelper.generateRandomArray(n, 0, n);
sortTestHelper.testSort('Buttle Sort', bubbleSort, a);
