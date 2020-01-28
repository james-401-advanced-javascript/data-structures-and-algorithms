'use strict';
const HashTable = require('../hashtable');
const leftJoin = require('../left-join');

describe('The correct functionality of left-join', () => {
    it('Two empty hash tables', () => {
        const table1 = new HashTable(10);
        const table2 = new HashTable(10);
        expect(leftJoin(table1, table2)).toBeFalsy();
    });
    it('Two hash tables with no shared keys', () => {
        const table1 = new HashTable(10);
        const table2 = new HashTable(10);

        table1.add('one', 1);
        table1.add('two', 2);
        table1.add('three', 3);

        table2.add('cat', 11);
        table2.add('dog', 22);
        table2.add('parrot', 33);

        expect(leftJoin(table1, table2)).toEqual([['one', 1, null], ['two', 2, null], ['three', 3, null]]);
    });
    it('Hash table where “left” table has a null value where “right” table does', () => {
        const table1 = new HashTable(10);
        const table2 = new HashTable(10);

        table1.add('one', 1);
        table1.add('two', null);
        table1.add('three', 3);

        table2.add('cat', 11);
        table2.add('two', null);
        table2.add('parrot', 33);

        expect(leftJoin(table1, table2)).toEqual([['one', 1, null], ['two', null, null], ['three', 3, null]]);
    });
    it('Hash tables of varying sizes, “left” table is smaller than the “right” table', () => {
        const table1 = new HashTable(10);
        const table2 = new HashTable(10);

        table1.add('one', 'anotha');
        table1.add('two', null);
        table1.add('three', 3);

        table2.add('cat', 11);
        table2.add('two', null);
        table2.add('parrot', 33);
        table2.add('three', 'walrus');
        table2.add('one', 1);

        expect(leftJoin(table1, table2)).toEqual([
            [ 'one', 'anotha', 1 ],
            [ 'two', null, null ],
            [ 'three', 3, 'walrus' ],
        ]);
    });
    it('Hash tables of varying sizes, “right” table is smaller than the “left” table', () => {
        const table1 = new HashTable(10);
        const table2 = new HashTable(10);

        table1.add('one', 'anotha');
        table1.add('two', null);
        table1.add('three', 3);
        table1.add('cat', 11);
        table1.add('parrot', null);

        table2.add('parrot', 33);
        table2.add('three', 'walrus');
        table2.add('one', 1);

        expect(leftJoin(table1, table2)).toEqual([
            [ 'one', 'anotha', 1 ],
            [ 'cat', 11, null ],
            [ 'parrot', null, 33 ],
            [ 'two', null, null ],
            [ 'three', 3, 'walrus' ],
        ]);
    });
    it('Hash table with same sizes', () => {
        const table1 = new HashTable(10);
        const table2 = new HashTable(10);

        table1.add('one', 1);
        table1.add('two', 2);
        table1.add('three', 3);

        table2.add('one', 11);
        table2.add('two', 22);
        table2.add('three', 33);

        expect(leftJoin(table1, table2)).toEqual([ [ 'one', 1, 11 ], [ 'two', 2, 22 ], [ 'three', 3, 33 ] ]);
    });
    it('Hash table with collision', () => {
        const table1 = new HashTable(3);
        const table2 = new HashTable(3);
        
        table1.add('one', 1);
        table1.add('two', 2);
        table1.add('three', 3);
        table1.add('four', 4);
        table1.add('five', 5);

        table2.add('one', 11);
        table2.add('two', 22);
        table2.add('three', 33);

        expect(leftJoin(table1, table2)).toEqual([
            [ 'four', 4, null ],
            [ 'five', 5, null ],
            [ 'one', 1, 11 ],
            [ 'two', 2, 22 ],
            [ 'three', 3, 33 ],
        ]);
    });
});

describe('The correct functionality of a HashTable', () => {
    it ('Successfully adds a key/value to your hashtable results in the value being in the data structure', () => {
        let table = new HashTable(5);
        table.add('James', 'student');
        expect(table.contains('James')).toBe(true);
    });
    it ('Successfully retrieves based on a key returns the value stored', () => {
        let table = new HashTable(5);
        table.add('James', 'student');
        expect(table.get('James')).toMatch('student');
    });
    it ('Successfully returns null for a key that does not exist in the hashtable', () => {
        let table = new HashTable(5);
        table.add('James', 'student');
        expect(table.get('Wyatt')).toBeNull();
    });
    it ('Successfully handle a collision within the hashtable', () => {
        let table = new HashTable(5);
        table.add('Dean', 'student');
        table.add('Dane', 'professor');
        expect(table.storage[1][0][0]).toBe('Dean');
        expect(table.storage[1][1][0]).toBe('Dane');
    });
    it ('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
        let table = new HashTable(5);
        table.add('Dean', 'student');
        table.add('Dane', 'professor');
        expect(table.get('Dane')).toMatch('professor');
    });
    it ('Successfully hash a key to an in-range value', () => {
        let table = new HashTable(5);
        expect(table.hash('James')).toBe(1);
    });
    it ('Successfully removes an entry from the table', () => {
        let table = new HashTable(5);
        table.add('James', 'student');
        table.remove('James');
        expect(table.get('James')).toBeNull();
    });
    it ('Successfully returns the items within the table', () => {
        let table = new HashTable(5);
        table.add('James', 'student');
        table.add('James', 'instructor');
        expect(table.print().length).toBe(2);
    });
});
