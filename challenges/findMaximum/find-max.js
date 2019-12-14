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

let sum = tree.findMaximumBinaryTree();

console.log(sum);