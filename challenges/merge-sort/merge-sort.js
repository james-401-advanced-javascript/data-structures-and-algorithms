"use strict";

/*
Write a function called mergeSort, which takes an array of numbers and returns a sorted array after using the Merge Sort algorithm. Do not mutate (change) the array given to you as a parameter.
*/

function mergeSort(arr, sIndx, eIndx) {
    // If only one item in array, return;
    if (arr.length <= 1) return;

    // Set value of midpoint that will separate split array
    let midpoint = Math.floor((sIndx + eIndx) / 2);
    console.log(midpoint);
    mergeSort(arr, sIndx, midpoint);
    mergeSort(arr, midpoint + 1, eIndx);
    return merge(arr, sIndx, midpoint, eIndx);
}

function merge(arr, sIndx, midpoint, eIndx) {
    let mergedArr = [];
    let j = midpoint + 1;
    for (let i = 0; i <= midpoint; i++) {
        while (arr[i] > arr[j] && j < arr.length) {
            mergedArr.push(arr[j]);
            j++;
        }
        mergedArr.push(arr[i]);
    }
    for (let i = 0; i < mergedArr.length; i++) {
        arr[sIndx + i] = mergedArr[i];
    }
    return mergedArr;
}

let testArr = [4, 2, 3, 1];

let foo = mergeSort(testArr, 0, testArr.length - 1);

console.log(foo);
