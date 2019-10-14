'use strict';

let linkedList = require('../lib/linked-list');

// Can successfully instantiate an empty linked list
// Can properly insert into the linked list
// The head property will properly point to the first node in the linked list
// Can properly insert multiple nodes into the linked list
// Will return true when finding a value within the linked list that exists
// Will return false when searching for a value in the linked list that does not exist
// Can properly return a collection of all the values that exist in the linked list

describe('The functionality of a linked list', () => {
    let list = new linkedList();
    it('Can successfully instantiate an empty linked list', () => {
        expect(list).toBeDefined();
    });
    it('Can properly insert into the linked list', () => {
        let node = list.insert('Node0');
        expect(typeof node.head.data).toBe('string');
    });
    it('The head property will properly point to the first node in the linked list', () => {
        let newList = list;
        newList.insert('Node3');
        newList.insert('Node2');
        newList.insert('Node1');
        expect(list.head.data).toMatch('Node1');
    });
    it('Can properly insert multiple nodes into the linked list', () => {
        let newList = list;
        let num = 1;
        newList.insert('Node3');
        newList.insert('Node2');
        newList.insert('Node1');
        while (newList.includes(`Node${num}`)) {
            num++;
        }
        expect(true).toBe(num > 1);
    });
    it('Will return true when finding a value within the linked list that exists', () => {
        let newList = list;
        newList.insert('Node1');
        expect(newList.includes('Node1')).toBe(true);
    });
    it('Will return false when searching for a value in the linked list that does not exist', () => {
        let newList = list;
        newList.insert('Node1');
        expect(newList.includes('Node10')).toBe(false);
    });
    it('Can properly return a collection of all the values that exist in the linked list', () => {
        let newList = list;
        newList.insert('Node3');
        newList.insert('Node2');
        newList.insert('Node1');
        expect(newList.toString()).toBeDefined();
        expect(typeof newList.toString()).toBe('string');
    });
});
