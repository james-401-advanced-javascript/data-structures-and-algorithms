'use strict';

/*
Write a function called mergeSort, which takes an array of numbers and returns a sorted array after using the Merge Sort algorithm. Do not mutate (change) the array given to you as a parameter.
*/

function mergeSort(arr, sIndx, eIndx) {
    // If only one item in array, return;
    if (sIndx >= eIndx) {
        return;
    }

    // Set value of midpoint that will separate split array
    let midpoint = Math.floor((sIndx + eIndx) / 2);
    mergeSort(arr, sIndx, midpoint);
    mergeSort(arr, midpoint + 1, eIndx);
    return merge(arr, sIndx, midpoint, eIndx);
}

function merge(arr, sIndx, midpoint, eIndx) {
    let mergedArr = [];
    let j = midpoint + 1;
    for (let i = sIndx; i <= midpoint; i++) {
        while (arr[i] > arr[j] && j <= eIndx) {
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

let foo = mergeSort(testArr, 0, testArr.length);

console.log(foo);
