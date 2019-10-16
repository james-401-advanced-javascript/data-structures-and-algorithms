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

    append(value) {
        let node = new Node(value);

        // If the list is empty, set the new
        // node equal to the head

        if (!this.head) {
            // if head = null
            console.log('Head: ', this.head);

            this.head = node;

            console.log('New Head: ', this.head.data, '->', this.head.next);
            console.log('Done Appending');
            console.log('=======================');
            return this;
        }

        // If the list is not empty, cycle through the
        // list until you get to a node that has no
        // next set. We then set that next equal to our
        // new node
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;

        // current.next = node;

        return this;
    }
}

module.exports = LinkedList;
