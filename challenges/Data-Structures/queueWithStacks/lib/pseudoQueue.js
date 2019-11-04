'use strict';

const Stack = require('./stack');

class PseudoQueue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    // enque = push on to stack 1
    enqueue(value) {
        if (value === undefined) {
            console.error('Must pass in a value');
            return -1;
        }
        this.stack1.push(value);
        return this.stack1;
    }

    // Dequeue and return the front of the queue
    dequeue() {
    // Return appropriate string if queue is empty
        if (!this.stack1.top) {
            return 'The queue is empty';
        }
        // If only 1 item left in queue, return that item
        // If more than 1 item, run through the queue like normal
        if (this.stack1.top && !this.stack1.top.next) {
            let topVal = this.stack1.top.data;
            this.stack1.top = null;
            return topVal;
        } else if (this.stack1.top && this.stack1.top.next) {
            let current = this.stack1.top;
            this.stack2.push(current.data);
            while (current.next) {
                this.stack2.push(current.next.data);
                current = current.next;
            }
            // store value to be returned in temp variable
            let temp = this.stack2.top.data;
            // remove top of stack 2 by making it's next value the top
            // then empty stack one and move the items froms stack2 back onto stack1
            this.stack2.top = this.stack2.top.next;
            this.stack1.top = null;
            if (!this.stack2.top) {
                console.log('Queue is empty');
            } else {
                current = this.stack2.top;
                this.stack1.push(current.data);
                while (current.next) {
                    this.stack1.push(current.next.data);
                    current = current.next;
                }
                this.stack2.top = null;
                return temp;
            }
        }
    }
}

module.exports = PseudoQueue;
