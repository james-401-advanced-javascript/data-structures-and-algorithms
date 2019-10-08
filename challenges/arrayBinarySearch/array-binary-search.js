/**
 * / binarySearch
 * @param arr
 * @param search key
 * The point of this code challenge is to create a function that accepts an array and a search key. The goal is to use Binary Search to find the index of the array value that matches the search key if it exists in the array. If the search key is not present in the array, the function should return -1.
 */

function binarySearch(arr,search) {
    //check if middle index matches key
    let firstIndex = 0;
    let lastIndex = arr.length - 1;
    while (firstIndex <= lastIndex) {
        let middle = Math.floor((firstIndex + lastIndex) / 2);
        if (arr[middle] === search) {
            return middle;
        }
        if (search < arr[middle]) {
            // if search is less, then firstIndex stays same
            // and lastIndex changes to middle minus 1
            // divide that by two, and make that new middle
            lastIndex = --middle;
        } else if (search > arr[middle]) {
            firstIndex = ++middle;
        }
    }
    return -1;
}

module.exports = binarySearch;
