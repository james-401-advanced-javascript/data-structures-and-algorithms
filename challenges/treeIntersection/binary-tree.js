'use strict';

const Node = require('./node');

class BinaryTree {
    constructor(root) {
        this.root = !root ? new Node() : new Node(root);
    }
}

module.exports = BinaryTree;
