'use strict';

const Node = require('./node');
const Stack = require('./stack');

class BinaryTree {
    constructor(root) {
        this.root = !root ? new Node() : new Node(root);
        this.stack = root ? new Stack(root) : new Stack();
        this.sum = 0;
    }

    // Find maximum value of all nodes within a numeric tree
    findMaximumBinaryTree(current) {
        if (!current) {
            if (!this.root.value) {
                console.log('The tree appears to be empty');
            } else {
                if (!this.root.seen) {
                    this.stack.push(this.root.value);
                    this.root.seen = true;
                }
            }
        }

        if (current) {
            if (!current.seen) {
                this.stack.push(current.value);
                current.seen = true;
                // IF (current.left) --> findMAX(current.left)
                if (current.left) {
                    this.findMaximumBinaryTree(current.left);
                }
                // IF (current.right) --> findMAX(current.right)
                if (current.right) {
                    this.findMaximumBinaryTree(current.right);
                }
                // RETURN acc
                while (this.stack.peek() !== -1) {
                    return this.sum += this.stack.pop();
                }
            }
        }
        return this.sum;
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
