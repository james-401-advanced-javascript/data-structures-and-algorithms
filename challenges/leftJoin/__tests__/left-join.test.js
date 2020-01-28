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

        table1.add('fond', 'enamored');
        table1.add('wrath', 'anger');
        table1.add('diligent', 'employed');

        table2.add('cat', 'feline');
        table2.add('dog', 'canine');
        table2.add('parrot', 'bird');

        expect(leftJoin(table1, table2)).toEqual([
            [ 'wrath', 'anger', null ],
            [ 'fond', 'enamored', null ],
            [ 'diligent', 'employed', null ],
        ]);
    });
    it('Hash table where “left” table has a null value where “right” table does', () => {
        const table1 = new HashTable(10);
        const table2 = new HashTable(10);

        table1.add('fond', 'enamored');
        table1.add('wrath', null);
        table1.add('diligent', 'employed');

        table2.add('cat', 'feline');
        table2.add('wrath', null);
        table2.add('parrot', 'bird');

        expect(leftJoin(table1, table2)).toEqual([
            [ 'wrath', null, null ],
            [ 'fond', 'enamored', null ],
            [ 'diligent', 'employed', null ],
        ]);
    });
    it('Hash tables of varying sizes, “left” table is smaller than the “right” table', () => {
        const table1 = new HashTable(10);
        const table2 = new HashTable(10);

        table1.add('fond', 'enamored');
        table1.add('wrath', 'anger');

        table2.add('fond', 'averse');
        table2.add('dog', 'canine');
        table2.add('parrot', 'bird');

        expect(leftJoin(table1, table2)).toEqual([ [ 'wrath', 'anger', null ], [ 'fond', 'enamored', 'averse' ] ]);
    });
    it('Hash tables of varying sizes, “right” table is smaller than the “left” table', () => {
        const table1 = new HashTable(10);
        const table2 = new HashTable(10);

        table1.add('fond', 'enamored');
        table1.add('wrath', 'anger');
        table1.add('diligent', 'employed');

        table2.add('fond', 'averse');

        expect(leftJoin(table1, table2)).toEqual([
            [ 'wrath', 'anger', null ],
            [ 'fond', 'enamored', 'averse' ],
            [ 'diligent', 'employed', null ],
        ]);
    });
    it('Hash table with same sizes', () => {
        const table1 = new HashTable(10);
        const table2 = new HashTable(10);

        table1.add('fond', 'enamored');
        table1.add('wrath', 'anger');
        table1.add('diligent', 'employed');

        table2.add('fond', 'averse');
        table2.add('wrath', 'delight');
        table2.add('diligent', 'idle');

        expect(leftJoin(table1, table2)).toEqual([
            [ 'wrath', 'anger', 'delight' ],
            [ 'fond', 'enamored', 'averse' ],
            [ 'diligent', 'employed', 'idle' ],
        ]);
    });
    it('Hash table with collision', () => {
        const table1 = new HashTable(3);
        const table2 = new HashTable(3);
        
        table1.add('fond', 'enamored');
        table1.add('wrath', 'anger');
        table1.add('diligent', 'employed');
        table1.add('mad', 'angry');
        table1.add('cold', 'freezing');

        table2.add('fond', 'averse');
        table2.add('wrath', 'delight');
        table2.add('diligent', 'idle');
        table2.add('mad', 'calm');
        table2.add('cold', 'hot');

        expect(leftJoin(table1, table2)).toEqual([
            [ 'fond', 'enamored', 'averse' ],
            [ 'mad', 'angry', 'calm' ],
            [ 'wrath', 'anger', 'delight' ],
            [ 'cold', 'freezing', 'hot' ],
            [ 'diligent', 'employed', 'idle' ],
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
