'use strict';

const insertionSort = require('../insertion-sort');

describe('The insertion-sort algorithm', () => {
    it('Sorts an array of length 1', () => {
        let arr = [2];
        expect(insertionSort(arr)[0]).toBe(2);
    });
    it('Sorts an array of length 3', () => {
        let arr = [28, 5, 10];
        expect(insertionSort(arr)).toMatchObject([5, 10, 28]);
    });
    it('Sorts an array of length 10', () => {
        let arr = [21, 5, 19, 0, 82, 1, 3, 982, 71];
        expect(insertionSort(arr)).toMatchObject([0, 1, 3, 5, 19, 21, 71, 82, 982]);
    });
    it('Incorrect parameter error handling', () => {
        expect(insertionSort(920)).toBe(-1);
    });
    it('Not an array', () => {
        expect(insertionSort({})).toBe(-1);
    });
    it('Empty array', () => {
        let arr = [];
        expect(insertionSort(arr)).toBe(-1);
    });
    it('Array with non-numerical values', () => {
        let arr = ['2', '5', '19', '0', '82', '1', '3'];
        expect(insertionSort(arr)).toBe(-1);
    });
});
