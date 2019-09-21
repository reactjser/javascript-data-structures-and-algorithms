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

module.exports = insertionSort;
