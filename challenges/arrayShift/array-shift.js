'use strict';

/**
 * / arrayShift
 * @param arr
 * @param value
 * The goal is to write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in JS methods, return an array with the new value added at the middle index.
 * If array has even number of items, divide array.length by 2, and place the value at index of result
 * If array has odd number of items, add 1 to array.length then divide that value by 2, then put value at index of result
 */

const insertShiftArray = (arrParam, val) => {
    let arr = arrParam;
    let len = arr.length;
    let arrCopy = [];
    // see if array.length is odd or even
    // place val in "index" position of arrCopy
    // once num === index -> arrCopy[num] = val
    // otherwise -> arrCopy[num] = arr[num]
    if (len % 2 === 0) {
        let index = len / 2;
        for (let num in arr) {
            if (num == index) {
                arrCopy[index] = val;
                arrCopy[++num] = arr[index];
            } else if (arrCopy[index]) {
                arrCopy[++num] = arr[--num];
            } else { 
                arrCopy[num] = arr[num];
            }
        }
    } else if (len % 2 !== 0) {
        let index = ++len / 2;
        for (let num in arr) {
            if (num == index) {
                arrCopy[index] = val;
                arrCopy[++num] = arr[index];
            } else if (arrCopy[index]) {
                arrCopy[++num] = arr[--num];
            } else { 
                arrCopy[num] = arr[num];
            }
        }
    }
    return arrCopy;
};

module.exports = exports = insertShiftArray;