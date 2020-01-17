'use strict';
let repeatedWord = require('../repeated-word');

describe('The functionality of the repeatedWord function', () => {
    it ('String which contains only one word', () => {
        let str = 'Hello';
        expect(repeatedWord(str)).toBe(-1);
    });
    it ('String where the repeated word happens immediately (‘hello hello’)', () => {
        let str = 'hello hello';
        expect(repeatedWord(str)).toBe('hello');
    });
    it ('String where there are no repeated words', () => {
        let str = 'Hello to the max';
        expect(repeatedWord(str)).toBe(-1);
    });
    it ('Incorrect parameter error handling', () => {
        let str = null;
        expect(repeatedWord(str)).toBe(-1);
    });
    it ('Not a string', () => {
        let str = 6;
        expect(repeatedWord(str)).toBe(-1);
    });
    it ('Empty string', () => {
        let str = '';
        expect(repeatedWord(str)).toBe(-1);
    });
});
