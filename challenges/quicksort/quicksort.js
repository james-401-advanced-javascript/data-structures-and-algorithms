'use strict';

// Write a function called quicksort, which takes an array of numbers and returns a sorted array after using the Quicksort algorithm. Do not mutate (change) the array given to you as a parameter.

function quicksort([...arr], sIndx, eIndx) {
    function sortCopy(arr, sIndx, eIndx) {
        if (arr.length > 1) {
            let pivot = partition(arr, sIndx, eIndx);
            if (sIndx < pivot - 1) sortCopy(arr, sIndx, pivot - 1);
            if (pivot < eIndx) sortCopy(arr, pivot + 1, eIndx);
        }
        return arr;
    }
    return sortCopy(arr, sIndx, eIndx);
}

function partition(arr, sIndx, eIndx) {
    let pivot = eIndx;
    let i = sIndx - 1;

    // loop through array and partition
    // First: partition values smaller than pivot to left of it in array
    for (let j = sIndx; j <= eIndx - 1; j++) {
        if (arr[j] <= arr[pivot]) {
            i++;
            swap(arr, i, j);
        }
    }
    // Once smaller items are moved to left of pivot
    // THEN move pivot to first index after i position
    i++;
    swap(arr, i, pivot);

    return i;
}

function swap(arr, left, right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}

let arr = [1, 3, 5, 22, 150, 0, 80, 6, 14, 8, 12];

let bar = quicksort(arr, 0, arr.length - 1);

console.log(bar);
