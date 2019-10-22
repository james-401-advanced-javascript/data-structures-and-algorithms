'use strict';

const Node = require('./node');

class LinkedList {
    constructor() {
        this.head = null;
    }

    // insert = add to beginning of list
    insert(value) {
        if (value === undefined) {
            throw Error('Must pass in a value');
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
            throw Error('Must pass in a value and newValue');
        }
        let node = new Node(newVal);
        let current = this.head;
        // loop through linked list
        // if current.next.data === value
        // then newVal.next = current.next
        // and current.next = node;
        while (current.next) {
            if (this.head.data === value) {
                node.next = this.head;
                this.head = node;
                break;
            } else if (current.next.data === value) {
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
            throw Error('Must pass in a value and newValue');
        }
        let node = new Node(newVal);
        let current = this.head;
        // evaluate off of current.next in case inserting at end of list (even though append does this)
        // loop through linked list
        // if current.next.data === value
        // then node.next = current.next.next
        // and current.next.next = node;
        while (current.next) {
            if (this.head.data === value) {
                node.next = this.head.next;
                this.head.next = node;
                break;
            } else if (current.next.data === value) {
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
        if (value === undefined) {
            throw Error('Must pass in a value');
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
            throw Error('The Linked List is empty');
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
        if (value === undefined) {
            throw Error('Must pass in a value');
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
        return this;
    }

    // Write a method for the LinkedList class which takes a number, k, as a parameter.
    // Return the node’s value that is k from the end of the linked list.
    kthFromEnd(k) {
    // first use count function to get number of nodes
    // then subtract k from count and store value in a variable
    // e.g.   k=3; count=10; var=7 (10-3); use <= instead of ===
        const error = 'error';
        let current = this.head;
        let count = 1;
        while (current.next) {
            current = current.next;
            count++;
        }
        // if k is negative, return error
        if (k < 0) {
            return error;
        }

        // if count less than or equal to k
        // return error
        if (count <= k) {
            return error;
        }
        // metric is number of times to run the next while loop
        const metric = count - k;
        count = 1;
        // return the value of current once loop has run metric number of times
        current = this.head;
        while (count < metric) {
            current = current.next;
            count++;
        }
        return current.data;
    }
}

module.exports = LinkedList;
