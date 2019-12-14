'use strict';

const Node = require('./node');

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    // push = add to beginning of list
    enqueue(value) {
        if (value === undefined) {
            console.error('Must pass in a value');
            return -1;
        }
        let node = new Node(value);

        // if no front
        // make current value front
        if (!this.front) {
            this.front = node;
            this.rear = node;
        } else {
        // if there is a front
        // make current node value front's next value
        // add current value to end of queue
        // because objects pass by reference in JS, this will automatically be applied to front node as well
            this.rear.next = node;
            this.rear = node;
        }
        return this;
    }

    // Dequeue and return the front of the queue
    dequeue() {
    // If there is no front, that must mean that the queue is empty
    // return -1 if queue is empty
        if (!this.front) {
            console.log('The queue is empty');
            return -1;
        }
        // store front value in temp variable
        let temp = this.front;
        this.front = this.front.next;
        temp.next = null;
        return temp.value;
    }

    peek() {
    // If there is no front, that must mean that the queue is empty
    // return -1 if queue is empty
        if (!this.front) {
            console.log('The queue is empty');
            return -1;
        }
        return this.front.value;
    }
}

module.exports = Queue;
