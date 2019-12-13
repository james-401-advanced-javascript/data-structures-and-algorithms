'use strict';

const BinaryTree = require('./binary-tree');
const Node = require('./node');
const tree = new BinaryTree(1);

tree.root.left = new Node(1);
tree.root.right = new Node(1);
tree.root.left.left = new Node(1);
tree.root.left.right = new Node(1);
tree.root.right.left = new Node(1);
tree.root.right.right = new Node(1);

findMaximumBinaryTree(tree);


function findMaximumBinaryTree(tree) {
    let arr = [];
    console.log('THISSSS: ',tree.root);
    if (tree.root) {
        // acc += this.root.value;
        arr.push(tree.root.value);
    }

    if (tree.value) {
        arr.push(tree.value);
    }

    if (tree.left) {
        arr.push(tree.left.value);
    }

    if (tree.right) {
        arr.push(tree.right.value);
    }

    // if (tree.left) {
    //     this.left.findMaximumBinaryTree(this.left);
    // }

    // if (tree.right) {
    //     this.right.findMaximumBinaryTree(this.right);
    // }
}