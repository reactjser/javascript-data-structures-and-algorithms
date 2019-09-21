// 选择排序
const selectionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    // 寻找[i, n)区间的最小值
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
};

module.exports = selectionSort;
