'use strict';

let linkedList = require('../lib/linked-list');

describe('The functionality of a linked list', () => {
    let list = new linkedList();

    // Challenge 05 - Linked List
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

    // Challenge 06 - Linked List Insertions
    it('Can properly append a node to the end of the list', () => {
        let newList = list;
        newList.insert('Node1');
        newList.insert('Node0');
        newList.append('Node2');
        expect(newList.toString().slice(-7, -1)).toMatch('Node2');
    });
    it('Can successfully add multiple nodes to the end of a linked list', () => {
        list.append('Node3');
        list.append('Node4');
        list.append('Node5');
        expect(list.toString().slice(-19, -1)).toMatch('Node4 --> Node5');
    });
    it('Can successfully insert a node before the first node of a linked list', () => {
        let newList = new linkedList();
        newList.insert('Node3');
        newList.insert('Node2');
        newList.insert('Node1');
        newList.insertBefore('Node1', 'Node0');
        expect(newList.toString().slice(14, 19)).toMatch('Node0');
    });
    it('Can successfully insert a node before a node located in the middle of a linked list', () => {
        let newList = new linkedList();
        newList.insert('Node5');
        newList.insert('Node4');
        newList.insert('Node2');
        newList.insert('Node1');
        newList.insertBefore('Node4', 'Node3');
        expect(newList.toString().slice(48, 53)).toMatch('Node3');
    });
    it('Can successfully insert after a node in the middle of the linked list', () => {
        let newList = new linkedList();
        newList.insert('Node5');
        newList.insert('Node4');
        newList.insert('Node2');
        newList.insert('Node1');
        newList.insertAfter('Node2', 'Node3');
        expect(newList.toString().slice(48, 53)).toMatch('Node3');
    });
    it('Can successfully insert a node after the last node of the linked list', () => {
        let newList = new linkedList();
        newList.insert('Node3');
        newList.insert('Node2');
        newList.insert('Node1');
        newList.insertAfter('Node3', 'Node4');
        expect(newList.toString().slice(-7, -1)).toMatch('Node4');
    });

    // Challenge 07 - Kth From the End
    let testList = new linkedList();
    testList.insert('Node3');
    testList.insert('Node2');
    testList.insert('Node1');
    testList.insert('Node0');

    it('Where k is greater than the length of the linked list', () => {
        expect(testList.kthFromEnd(5)).toBe('error');
    });
    it('Where k and the length of the list are the same', () => {
        expect(testList.kthFromEnd(4)).toBe('error');
    });
    it('Where k is not a positive integer', () => {
        expect(testList.kthFromEnd(-3)).toBe('error');
    });
    it('Where the linked list is of a size 1', () => {
        let smallList = new linkedList();
        smallList.insert('Node1');
        expect(smallList.kthFromEnd(0)).toBe('Node1');
    });
    it('Where k is not at the end, but somewhere in the middle of the linked list', () => {
        expect(testList.kthFromEnd(2)).toBe('Node1');
    });
});
