const BinaryTree = require('../binary-tree.js');
const Node = require('../node');

describe('Proper functionality of Binary Tree', () => {
    it('returns the greatest numeric value', () => {
        const numTree = new BinaryTree(2);
        numTree.root.left = new Node(7);
        numTree.root.right = new Node(5);
        numTree.root.left.left = new Node(2);
        numTree.root.left.right = new Node(11);
        numTree.root.right.left = new Node(9);
        numTree.root.right.right = new Node(6);

        expect(numTree.findMaximumBinaryTree()).toBe(11);
    });
});
