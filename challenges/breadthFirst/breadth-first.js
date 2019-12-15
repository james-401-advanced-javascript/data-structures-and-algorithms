'use strict';

const BinaryTree = require('./binary-tree');
const Node = require('./node');
const tree = new BinaryTree('A');

tree.root.left = new Node('B');
tree.root.right = new Node('C');
tree.root.left.left = new Node('D');
tree.root.left.right = new Node('E');
tree.root.right.left = new Node('F');
tree.root.right.right = new Node('G');

console.log(tree);

tree.breadthFirst();
