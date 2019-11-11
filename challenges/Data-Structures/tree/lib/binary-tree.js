'use strict';

const Node = require('./node');

class BinaryTree {
    constructor(root) {
        this.root = new Node(root);
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
