const binaryTree = require('../binary-tree');
describe('Testing challenge', () => {
    it('it should return the index of the array’s element that is equal to the search key', () => {
        expect(binarySearch([4,8,15,16,23], 15)).toStrictEqual(2);
    });
    it('it should return -1 if the search key does not exist', () => {
        expect(binarySearch([11,22,33,44,55,66,77], 90)).toStrictEqual(-1);
    });
    it('it should return the index of the array’s element that is equal to the search key', () => {
        expect(binarySearch([4,8,15,16,23,42,90], 8)).toStrictEqual(1);
    });
    it('it should return the index of the array’s element that is equal to the search key', () => {
        expect(binarySearch([4,8,15,16,23,42], 42)).toStrictEqual(5);
    });
});