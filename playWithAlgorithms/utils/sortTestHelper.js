class SortTestHelper {
  // 生成有n个元素的随机数组，每个元素的随机范围为[rangeL, rangeR]
  generateRandomArray(n, rangeL, rangeR) {
    const arr = new Array(n);

    for (let i = 0; i < n; i++) {
      arr[i] = rangeL + Math.floor(Math.random() * (rangeR - rangeL + 1));
    }

    return arr;
  }

  generateNearlyOrderedArray(n, swapTimes) {
    const arr = new Array(n);
    for (let i = 0; i < n; i++) {
      arr[i] = i;
    }

    for (let i = 0; i < swapTimes; i++) {
      const posx = Math.floor(Math.random() * n);
      const posy = Math.floor(Math.random() * n);
      [arr[posx], arr[posy]] = [arr[posy], arr[posx]];
    }

    return arr;
  }

  isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }
    return true;
  }

  testSort(sortName, sortFunc, arr) {
    const startTime = Date.now();
    sortFunc(arr);
    const endTime = Date.now();

    if (!this.isSorted(arr)) {
      throw new Error('排序失败！');
    }

    console.log(`${sortName}: ${(endTime - startTime) / 1000}s`);
  }
}

module.exports = SortTestHelper;
