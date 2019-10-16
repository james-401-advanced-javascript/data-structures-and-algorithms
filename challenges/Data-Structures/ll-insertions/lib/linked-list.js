'use strict';

const Node = require('./node');

class LinkedList {
    constructor() {
        this.head = null;
    }

    // insert = add to beginning of list
    insert(value) {
        if (!value) {
            throw Error;
        }
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

    // add a new node with the given newValue immediately before the first value node
    insertBefore(value, newVal) {
        if (value === undefined || newVal === undefined) {
            throw Error('Must inlude value and newValue');
        }
        let node = new Node(newVal);
        let current = this.head;
        // value = 4
        // newVal = 3
        // current = 2
        // 1 --> 2 --> 4 --> 5
        // 1 --> 2 -->
        // loop through linked list
        // if current.next.data === value
        // then newVal.next = current.next
        // and current.next = node;
        while (current.next) {
            if (current.next.data === value) {
                node.next = current.next;
                current.next = node;
                break;
            } else {
                current = current.next;
            }
        }
        return this;
    }
    // add a new node with the given newValue immediately after the first value node
    insertAfter(value, newVal) {
        if (value === undefined || newVal === undefined) {
            throw Error('Must inlude value and newValue');
        }
        let node = new Node(newVal);
        let current = this.head;
        // value = 5
        // newVal = 4
        // current = 3
        // 1 --> 2 --> 3 --> 5
        // 1 --> 2 --> 3 -->
        // evaluate off of current.next in case inserting at end of list (even though append does this)
        // loop through linked list
        // if current.next.data === value
        // then node.next = current.next.next
        // and current.next.next = node;
        while (current.next) {
            if (current.next.data === value) {
                node.next = current.next.next;
                current.next.next = node;
                break;
            } else {
                current = current.next;
            }
        }
        return this;
    }

    // A function called includes which takes in a value and returns a boolean if that value exists in the linked list
    includes(value) {
        if (!value) {
            throw Error;
        }
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
        if (!this.head) {
            console.log('The Linked List is empty');
        }
        let current = this.head;
        let response = 'Linked List: \n';
        while (current.next) {
            response += `${current.data} --> ${current.next.data} \n`;
            current = current.next;
        }
        return response;
    }

    append(value) {
        if (!value) {
            throw Error;
        }
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
