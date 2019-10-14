'use strict';

const Node = require('./node');

class LinkedList {
    constructor() {
        this.head = null;
    }

    // insert = add to beginning of list
    insert(value) {
        let node = new Node(value);

        // if no head
        // make current value head
        // if there is a head
        // make it the next value of node
        // make current value node's data value
        // make current value head
        if (!this.head) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        return this;
    }

    // A function called includes which takes in a value and returns a boolean if that value exists in the linked list
    includes(value) {
        let current = this.head;
        while (current.next) {
            if (current.data === value) {
                return true;
            } else {
                current = current.next;
            }
        }
        if (current.data === value) {
            return true;
        } else {
            return false;
        }
    }

    // Return the entire linked list in a string
    toString() {
        let current = this.head;
        let response = 'Linked List: \n';
        while (current.next) {
            response += `${current.data} --> ${current.next.data} \n`;
            current = current.next;
        }
        return response;
    }
}

module.exports = LinkedList;
