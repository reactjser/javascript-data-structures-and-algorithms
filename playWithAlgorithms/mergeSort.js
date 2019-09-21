// 将arr[l...mid]和arr[mid+1...r]两部分进行归并
const __merge = (arr, l, mid, r) => {
  const aux = new Array(r - l + 1);
  for (let i = l; i <= r; i++) {
    aux[i - l] = arr[i];
  }

  let i = l;
  let j = mid + 1;
  for (let k = l; k <= r; k++) {
    if (i > mid) {
      arr[k] = aux[j - l];
      j++;
    } else if (j > r) {
      arr[k] = aux[i - l];
      i++;
    } else if (aux[i - l] < aux[j - l]) {
      arr[k] = aux[i - l];
      i++;
    } else {
      arr[k] = aux[j - l];
      j++;
    }
  }
};

// 递归使用归并排序，对arr[l...r]的范围进行排序
const __mergeSort = (arr, l, r) => {
  if (l >= r) {
    return;
  }

  const mid = Math.floor((l + r) / 2);

  __mergeSort(arr, l, mid);
  __mergeSort(arr, mid + 1, r);

  // 优化逻辑
  if (arr[mid] > arr[mid + 1]) {
    __merge(arr, l, mid, r);
  }
};

// 归并排序
const mergeSort = arr => {
  __mergeSort(arr, 0, arr.length - 1);
};

module.exports = mergeSort;
