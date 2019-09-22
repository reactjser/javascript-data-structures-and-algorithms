// 对arr[l...r]部分进行partition操作
// 返回p，使得arr[l...p-1] < arr[p]; arr[p+1...r] > arr[p]
const __partition = (arr, l, r) => {
  const v = arr[l];

  // arr[l+1...j] < v; arr[j+1...i] > v
  let j = l;
  for (let i = l + 1; i <= r; i++) {
    if (arr[i] < v) {
      [arr[j + 1], arr[i]] = [arr[i], arr[j + 1]];
      j++;
    }
  }

  [arr[l], arr[j]] = [arr[j], arr[l]];
  return j;
};

// 对arr[l...r]部分进行快速排序
const __quickSort = (arr, l, r) => {
  if (l >= r) {
    return;
  }

  let p = __partition(arr, l, r);
  __quickSort(arr, l, p - 1);
  __quickSort(arr, p + 1, r);
};

// 快速排序
const quickSort = arr => {
  __quickSort(arr, 0, arr.length - 1);
};

module.exports = quickSort;
