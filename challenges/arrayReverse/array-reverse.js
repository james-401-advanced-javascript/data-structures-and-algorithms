// Write a function called reverseArray which takes an array as an argument. Without utilizing any of the built-in methods available to your language, return an array with elements in reversed order.

/**
 * / arrayReverse
 * @param arr
 * This function will first declare an empty array.
 * Then it will loop through the input array.
 * Each index will be placed at the beginning of the empty array using unshift().
 * Then the new array copy will be returned with the elements of the input array reversed.
 */

const arrayReverse = arr => {
    let arrCopy = [];
    for (let item of arr) {
        arrCopy.unshift(item);
    }
    return arrCopy;
};
