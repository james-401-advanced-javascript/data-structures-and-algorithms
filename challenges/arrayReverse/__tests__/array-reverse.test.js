'use strict';

let arrayReverse = require('../array-reverse');

describe('array reverse', () => {

    it('returns reversed array', () => {
        expect(arrayReverse([1,2,3])).toEqual([3,2,1]);
    });
});
