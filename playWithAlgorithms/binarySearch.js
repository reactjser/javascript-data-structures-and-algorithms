// 对于有序数列，才能使用二分查找法
const binarySearch = (arr, target) => {
  // 在arr[l...r]之中查找target
  let l = 0;
  let r = n - 1;
  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);
    if (arr[mid] === target) {
      return mid;
    }

    // 在arr[l...mid-1]之中查找target
    if (target < arr[mid]) {
      r = mid - 1;
    } else {
      // 在arr[mid + 1...r]之中查找target
      l = mid + 1;
    }
  }

  return -1;
};
