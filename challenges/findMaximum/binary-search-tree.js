'use strict';

const BinaryTree = require('./binary-tree');

class BinarySearchTree extends BinaryTree {
    constructor(value) {
        super(value);
    }

    // Add node to tree in correct position
    add(val) {
    // If n is equal to current val
    // if there is no left property, add it there
    // if there is a left, but no right, add it there
    // if root, left, and right children are identical
    // run through same check on root left
        if (!val || !this.root || val === undefined) {
            return -1;
        }
        const root = this.root;
        if (val === root.value) {
            return `${val} is already present in tree`;
        }

        // if val is less than current val, place input val in left node path
        if (val < root.value) {
            if (!root.left) {
                root.left = new BinarySearchTree(val);
            } else {
                root.left.add(val);
            }
        }

        // if val is greater than current val, place input val in right node path
        if (val > root.value) {
            if (!root.right) {
                root.right = new BinarySearchTree(val);
            } else {
                root.right.add(val);
            }
        }
    }

    // If the value is in the root, return true
    // otherwise check root of left and right nodes when present
    contains(val) {
        let root = this.root;

        if (val === root.value) {
            return true;
        }
        if (val < root.value) {
            if (root.left) {
                return root.left.contains(val);
            }
        }
        if (val > root.value) {
            if (root.right) {
                return root.right.contains(val);
            }
        }

        return false;
    }
}

module.exports = BinarySearchTree;

// let tree = new BinarySearchTree(100);

// tree.root.left = new BinarySearchTree(50);

// tree.root.right = new BinarySearchTree(200);
// tree.root.left.root.left = new BinarySearchTree(25);
// tree.root.left.root.right = new BinarySearchTree(75);
// tree.root.right.root.left = new BinarySearchTree(155);

// tree.add(82);

// console.log(tree.contains(820));
