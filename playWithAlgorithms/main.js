const SortTestHelper = require('./utils/sortTestHelper');
const insertionSort = require('./insertionSort');
const mergeSort = require('./mergeSort');
const sortTestHelper = new SortTestHelper();

const n = 100000;
const swapTimes = 0;
const arr1 = sortTestHelper.generateRandomArray(n, 0, n);
// const arr1 = sortTestHelper.generateNearlyOrderedArray(n, swapTimes);
const arr2 = sortTestHelper.copyIntArray(arr1);
sortTestHelper.testSort('Insertion Sort', insertionSort, arr1);
sortTestHelper.testSort('Merge Sort', mergeSort, arr2);
