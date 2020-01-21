'use strict';
let HashTable = require('../hashtable');

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
