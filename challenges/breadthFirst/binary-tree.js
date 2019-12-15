'use strict';

const Node = require('./node');
const Queue = require('./queue');

class BinaryTree {
    constructor(root) {
        this.root = !root ? new Node() : new Node(root);
        this.queue = new Queue();
    }

    // A breadthFirst methods that traverses the tree using the breadth-first traversal pattern
    breadthFirst() {
        // Print current value
        // if (!this.root) {
        //     return -1;
        // }
        if (this.root) {
            if (!this.root.seen) {
                this.queue.enqueue(this.root);
                this.seen = true;
            }
            // if (this.root.left) {
            //     this.queue.enqueue(this.root.left);
            // }
            // if (this.root.right) {
            //     this.queue.enqueue(this.root.right);
            // }
        }

        this.queue.enqueue(this);
        this.seen = true;

        // Then put left child in queue
        if (this.left) {
            this.queue.enqueue(this.left.value);
        }

        // Then put right child in queue
        if (this.right) {
            this.queue.enqueue(this.right.value);
        }
        
        //// While queue is not empty, do same thing to items in queue
        while(this.queue.length) {
            // console.log('QUEUEUE: ',this.queue.front);
            console.log(this.queue.front.value.value);
            this.queue.dequeue();
        }

        // Call same function on child nodes
        if (this.left) {
            this.breadthFirst(this.left);
        }

        if (this.right) {
            this.breadthFirst(this.right);
        }
    }
}

module.exports = BinaryTree;
