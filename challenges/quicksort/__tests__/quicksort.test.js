'use strict';
let quicksort = require('../quicksort');

describe('The functionality of quicksort', () => {
    it('Sort array of length 1', () => {
        let arr = [3];
        expect(quicksort(arr, 0, arr.length - 1)).toEqual([3]);
    });
    it('Sort array of length 2', () => {
        let arr = [2,1];
        expect(quicksort(arr, 0, arr.length - 1)).toEqual([1,2]);
    });
    it('Sort array of length 10', () => {
        let arr = [3, 5, 22, 150, 0, 80, 6, 14, 8, 12];
        expect(quicksort(arr, 0, arr.length - 1)).toEqual([0, 3, 5, 6, 8, 12, 14, 22, 80, 150]);
    });
    it('Array with non-numerical values', () => {
        expect(quicksort(['not', 'numbers', {}])).toBe('Array values must be numbers');
    });
    it('Not an array', () => {
        expect(quicksort({}, 0, 1)).toBe('Must pass array to function');
    });
    it('Empty array', () => {
        expect(quicksort([], 0, 2)).toBe('Array is empty');
    });
});