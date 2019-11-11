'use strict';

const Node = require('./node');

class BinaryTree {
    constructor(root) {
        this.root = new Node(root);
    }
    // A preOrder method that traverses the tree using the pattern root >> left >> right and returns an array of the traversed values
    preOrder(root) {
        let arr = [];
        arr.push(root.value);

        if (root.left) {
            arr.push(...this.preOrder(root.left.root));
        }

        if (root.right) {
            arr.push(...this.preOrder(root.right.root));
        }
        return arr;
    }
}

let tree = new BinaryTree(1);

tree.root.left = new BinaryTree(2);

tree.root.right = new BinaryTree(3);
tree.root.left.root.left = new BinaryTree(4);
tree.root.left.root.right = new BinaryTree(5);
tree.root.right.root.left = new BinaryTree(6);
tree.root.right.root.right = new BinaryTree(7);

console.log(tree.preOrder(tree.root));
