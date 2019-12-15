'use strict';

const Node = require('./node');
const Queue = require('./queue');

class BinaryTree {
    constructor(root) {
        this.root = !root ? new Node() : new Node(root);
        this.queue = root ? new Queue(root) : new Queue();
    }

    // Find maximum value of all nodes within a numeric tree
    findMaximumBinaryTree() {
        let max = 0;
        // VAR seen = ARRAY
        // 1. Add root to queue
        this.queue.enqueue(this.root);
        // 2. While queue is NOT empty
        while (this.queue.peek() !== -1) {
            // A. var current = queue.dequeue()
            let current = this.queue.dequeue();
            // B. IF ![seen].contains(current) --> [seen].push(current) --> IF (current > max) --> max = current
            if (!current.seen) {
                current.seen = true;
                if (current.value > max) {
                    max = current.value;
                }
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

        return max;
    }
}

module.exports = BinaryTree;
