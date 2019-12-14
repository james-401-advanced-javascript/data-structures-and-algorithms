'use strict';

const BinaryTree = require('./binary-tree');
const Node = require('./node');
const tree = new BinaryTree(2);

tree.root.left = new Node(7);
tree.root.right = new Node(5);
tree.root.left.left = new Node(2);
tree.root.left.right = new Node(6);
tree.root.right.left = new Node(9);
tree.root.right.right = new Node(11);

let sum = tree.findMaximumBinaryTree();

console.log(sum);