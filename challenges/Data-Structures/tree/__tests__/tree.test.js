'use strict';

const BinarySearchTree = require('../lib/binary-search-tree');

let tree = new BinarySearchTree('A');
tree.root.left = new BinarySearchTree('B');
tree.root.right = new BinarySearchTree('C');
tree.root.left.root.left = new BinarySearchTree('D');
tree.root.left.root.right = new BinarySearchTree('E');
tree.root.right.root.left = new BinarySearchTree('F');

describe('The proper functionality of a tree', () => {
    it('Can successfully instantiate an empty tree', () => {
        expect(tree.constructor.name).toBe('BinarySearchTree');
    });
    it('Can successfully instantiate a tree with a single root node', () => {
        let tree1 = new BinarySearchTree(10);
        expect(tree1.root.value).toBe(10);
        expect(tree1.root.left).toBeNull();
        expect(tree1.root.right).toBeNull();
    });
    it('Can successfully return a collection from a pre-order traversal', () => {
        expect(tree.preOrder()).toMatchObject(['A', 'B', 'D', 'E', 'C', 'F']);
    });
    it('Can successfully return a collection from an in-order traversal', () => {
        expect(tree.inOrder()).toMatchObject(['D', 'B', 'E', 'A', 'F', 'C']);
    });
    it('Can successfully return a collection from a post-order traversal', () => {
        expect(tree.postOrder()).toMatchObject(['D', 'E', 'B', 'F', 'C', 'A']);
    });
    it('Can successfully add a left child and right child to a single root node on a Binary Search Tree', () => {
        let testTree = new BinarySearchTree(100);
        testTree.add(50);
        testTree.add(200);
        expect(testTree.root.left.root.value).toBe(50);
        expect(testTree.root.right.root.value).toBe(200);
    });
    it('Will return true if value is in tree, and false if it is not', () => {
        let testTree = new BinarySearchTree(100);
        testTree.add(50);
        testTree.add(200);
        testTree.add(25);
        testTree.add(150);
        expect(testTree.contains(80)).toBe(false);
        expect(testTree.contains(150)).toBe(true);
    });
});
