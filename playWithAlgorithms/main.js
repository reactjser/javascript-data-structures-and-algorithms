const SortTestHelper = require('./utils/sortTestHelper');
const bubbleSort = require('./bubbleSort');
const selectionSort = require('./selectionSort');
const insertionSort = require('./insertionSort');
const mergeSort = require('./mergeSort');
const quickSort = require('./quickSort');

const sortTestHelper = new SortTestHelper();

const n = 1000000;
const swapTimes = 100;
const arr = sortTestHelper.generateRandomArray(n, 0, n);
// const arr = sortTestHelper.generateNearlyOrderedArray(n, swapTimes);
const arr1 = sortTestHelper.copyIntArray(arr);
const arr2 = sortTestHelper.copyIntArray(arr);
const arr3 = sortTestHelper.copyIntArray(arr);
const arr4 = sortTestHelper.copyIntArray(arr);
const arr5 = sortTestHelper.copyIntArray(arr);

// sortTestHelper.testSort('Sort', arr => arr.sort((a, b) => a - b), arr);
// sortTestHelper.testSort('Bubble Sort', bubbleSort, arr1);
// sortTestHelper.testSort('Selection Sort', selectionSort, arr2);
// sortTestHelper.testSort('Insertion Sort', insertionSort, arr3);
sortTestHelper.testSort('Merge Sort', mergeSort, arr4);
sortTestHelper.testSort('Quick Sort', quickSort, arr5);
// 