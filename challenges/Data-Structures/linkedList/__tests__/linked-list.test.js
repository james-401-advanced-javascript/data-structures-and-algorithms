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
    it('The head property will properly point to the first node in the linked list', () => {});
    it('Can properly insert multiple nodes into the linked list', () => {});
    it('Will return true when finding a value within the linked list that exists', () => {});
    it('Will return false when searching for a value in the linked list that does not exist', () => {});
    it('Can properly return a collection of all the values that exist in the linked list', () => {});
});
