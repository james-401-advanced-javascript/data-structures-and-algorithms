'use strict';

const Node = require('./node');

class Stack {
    constructor() {
        this.top = null;
    }

    // push = add to beginning of list
    push(value) {
        if (value === undefined) {
            throw Error('Must pass in a value');
        }
        let node = new Node(value);

        // if no top
        // make current value top
        // if there is a top
        // make it the next value of node
        // make current value node's data value
        // make current value top
        if (!this.top) {
            this.top = node;
        } else {
            node.next = this.top;
            this.top = node;
        }
        return this;
    }

    // Pop and return the top of the stack
    pop() {
    // If there is no top, that must mean that the stack is empty
    // return -1 if stack is empty
        if (!this.top) {
            console.log('The stack is empty');
            return -1;
        }
        let temp = this.top;
        this.top = this.top.next;
        return temp.data;
    }
}

module.exports = Stack;
