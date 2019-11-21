'use strict';

const BinaryTree = require('../lib/binary-tree');
const FizzBuzzTree = require('../fizz-buzz-tree');

let tree = new BinaryTree(15);
tree.root.left = new BinaryTree(11);
tree.root.right = new BinaryTree(2);
tree.root.left.root.left = new BinaryTree(32);
tree.root.left.root.right = new BinaryTree(50);
tree.root.right.root.right = new BinaryTree(12);

describe('The proper functionality of a Fizz Buzz Tree', () => {
    it('Can successfully instantiate an empty tree', () => {
        expect(tree.constructor.name).toBe('BinaryTree');
    });
    it('Can successfully instantiate a tree with a single root node', () => {
        let tree1 = new BinaryTree(10);
        expect(tree1.root.value).toBe(10);
        expect(tree1.root.left).toBeNull();
        expect(tree1.root.right).toBeNull();
    });
    it('Properly handles incorrect parameters', () => {
        let tree1 = new BinaryTree('Strizzing');
        expect(FizzBuzzTree(tree1)).toBe('Node must have a number value');
    });
    it('Can successfully return a collection from a pre-order traversal', () => {
        expect(tree.preOrder()).toMatchObject([15, 11, 32, 50, 2, 12]);
    });
    it('Can successfully return a collection from an in-order traversal', () => {
        expect(tree.inOrder()).toMatchObject([32, 11, 50, 15, 2, 12]);
    });
    it('Can successfully return a collection from a post-order traversal', () => {
        expect(tree.postOrder()).toMatchObject([32, 50, 11, 12, 2, 15]);
    });
});
