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
        // VAR seen = ARRAY
        // 1. Add root to queue
        this.queue.enqueue(this.root);
        // 2. While queue is NOT empty
        while(this.queue.peek() !== -1) {
            // A. var current = queue.dequeue()
            let current = this.queue.dequeue();
            // B. IF ![seen].contains(current) --> [seen].push(current) --> OUTPUT: current
            if (!current.seen) {
                current.seen = true;
                console.log(current.value);
            }
            // C. IF current.left --> queue.push(LEFT)
            if (current.left) {
                this.queue.enqueue(current.left);
            }
            // D. IF current.right --> queue.push(RIGHT)
            if (current.right) {
                this.queue.enqueue(current.right);
            }
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
