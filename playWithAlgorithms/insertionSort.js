const SortTestHelper = require('./utils/sortTestHelper');
const sortTestHelper = new SortTestHelper();

// 插入排序
// const insertionSort = arr => {
//   for (let i = 1; i < arr.length; i++) {
//     // 寻找元素arr[i]合适的插入位置
//     for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
//       [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
//     }
//   }
// };

// 优化算法
const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    // 寻找元素arr[i]合适的插入位置
    const e = arr[i];
    let j;
    for (j = i; j > 0 && arr[j - 1] > e; j--) {
      arr[j] = arr[j - 1];
    }
    arr[j] = e;
  }
};

const n = 100000;
const a = sortTestHelper.generateRandomArray(n, 0, n);
sortTestHelper.testSort('Insertion Sort', insertionSort, a);
const a2 = sortTestHelper.generateNearlyOrderedArray(n, 10);
sortTestHelper.testSort('Insertion Sort', insertionSort, a2);
