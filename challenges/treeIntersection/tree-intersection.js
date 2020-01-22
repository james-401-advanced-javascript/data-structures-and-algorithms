'use strict';

const BinaryTree = require('./binary-tree');
const Node = require('./node');
const { collectNodes, returnMatches } = require('./helpers/helpers.js');

const treeIntersection = (node1, node2) => {
    const savedNodes = {};
    const matches = [];

    collectNodes(node1, savedNodes);
    returnMatches(node2, savedNodes, matches);

    return matches;
};

const tree = new BinaryTree(100);

tree.root.left = new Node(40);
tree.root.right = new Node(2);
tree.root.left.left = new Node(80);
tree.root.left.right = new Node(40);
tree.root.right.left = new Node(5);
tree.root.right.right = new Node(9);

const tree2 = new BinaryTree(101);

tree2.root.left = new Node(3);
tree2.root.right = new Node(90);
tree2.root.left.left = new Node(40);
tree2.root.left.right = new Node(80);
tree2.root.right.left = new Node(5);
tree2.root.right.right = new Node(1);


let foo = treeIntersection(tree.root, tree2.root);

console.log(foo);