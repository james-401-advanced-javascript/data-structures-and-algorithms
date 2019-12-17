'use strict';

// Write a function called insertionSort, which takes an array of numbers and returns a sorted array after using the Insertion Sort algorithm. Do not mutate (change) the array given to you as a parameter.

function insertionSort(inputArray) {
    // Error checking to make sure parameter passed in is an array
    if (inputArray.constructor.name !== 'Array') {
        console.log('Input must be array');
        return -1;
    }

    // Error checking to make sure array is not empty
    if (inputArray.length <= 0) {
        console.log('Array cannot be empty');
        return -1;
    }

    // Error checking to make sure the parameter is an array of numbers
    if (!inputArray.every(item => item.constructor.name === 'Number')) {
        console.log('Must be an array of numbers');
        return -1;
    }

    // If the three previous conditions are met, sort the array
    let arr = [...inputArray];
    for (let i = 0; i < arr.length; i++) {
        let j = i;
        while (j > 0) {
            if (arr[j - 1] > arr[j]) {
                let temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
            }
            j--;
        }
    }
    return arr;
}

module.exports = insertionSort;
