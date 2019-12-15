'use strict';

// Write a function called insertionSort, which takes an array of numbers and returns a sorted array after using the Insertion Sort algorithm. Do not mutate (change) the array given to you as a parameter.

function insertionSort(inputArray) {
    let arr = [...inputArray];
    for (let i = 0; i < arr.length; i++) {
        let j = i;
        while (j > 0) {
            if (arr[j-1] > arr[j]) {
                let temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
            }
            j--;
        }
    }
    return arr;
}

let testArr = [2,5,19,0,82,1,3];

let foo = insertionSort(testArr);
console.log(testArr);
console.log(foo);