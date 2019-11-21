'use strict';

const BinaryTree = require('./lib/binary-tree');

/*
This tree can be any binary tree with number values on its Nodes
Without utilizing any built-in methods available in JavaScript, determine whether or not the value of each Node is divisible by 3 and/or 5 and change the value of each of the nodes:
If the value is divisible by 3, replace the value with “Fizz”
If the value is divisible by 5, replace the value with “Buzz”
If the value is divisible by 3 and 5, replace the value with “FizzBuzz”
Return the tree with its new values.
*/

function FizzBuzzTree(node) {
    // Error checking to make sure value is passed in
    if (!node) return 'Must pass in a node';
    // Error checking to make sure node is passed in and its value is a number

    if (node.constructor.name !== 'Node' || typeof node.root.value !== 'number')
        return 'Node must have a number value';

    let root = node.root;
    let arr = [];
    if (root.value % 15 === 0) root.value = 'Fizz Buzz';
    else if (root.value % 3 === 0) root.value = 'Fizz';
    else if (root.value % 5 === 0) root.value = 'Buzz';

    arr.push(root.value);

    if (root.left) {
        FizzBuzzTree(root.left);
    }

    if (root.right) {
        FizzBuzzTree(root.right);
    }
    return node;
}

let tree = new BinaryTree(15);
tree.root.left = new BinaryTree(11);
tree.root.right = new BinaryTree(2);
tree.root.left.root.left = new BinaryTree(32);
tree.root.left.root.right = new BinaryTree(50);
tree.root.right.root.right = new BinaryTree(12);

let foo = FizzBuzzTree();

console.log(foo);
module.exports = FizzBuzzTree;
