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
        if (!this.root) {
            return -1;
        }
        
        if (!this.root.seen) {
            this.queue.enqueue(this.root);
            this.seen = false;
        }

        // Then put left child in queue
        if (this.left) {
            this.queue.enqueue(this.left);
        }

        // Then put right child in queue
        if (this.right) {
            this.queue.enqueue(this.right);
        }
        
        //// While queue is not empty, do same thing to items in queue
        while(this.queue.front) {
            this.queue.front.seen = false;
            let returnVal = this.queue.dequeue();
            console.log(returnVal);
        }

        // Call same function on child nodes
        if (this.left) {
            this.breadthFirst(this.left);
        }

        if (this.right) {
            this.breadthFirst(this.right);
        }
    }
    // A preOrder method that traverses the tree using the pattern root >> left >> right and returns an array of the traversed values
    preOrder() {
        let root = this.root;
        let arr = [];
        arr.push(root.value);

        if (root.left) {
            arr.push(...root.left.preOrder());
        }

        if (root.right) {
            arr.push(...root.right.preOrder());
        }
        return arr;
    }

    // An inOrder method that traverses the tree using the pattern left >> root >> right and returns an array of the traversed values
    inOrder() {
        let root = this.root;
        let arr = [];

        if (root.left) {
            arr.push(...root.left.inOrder());
        }

        arr.push(root.value);

        if (root.right) {
            arr.push(...root.right.inOrder());
        }
        return arr;
    }

    // A postOrder method that traverses the tree using the pattern left >> right >> root and returns an array of the traversed values
    postOrder() {
        let root = this.root;
        let arr = [];

        if (root.left) {
            arr.push(...root.left.postOrder());
        }

        if (root.right) {
            arr.push(...root.right.postOrder());
        }

        arr.push(root.value);
        return arr;
    }
}

module.exports = BinaryTree;
