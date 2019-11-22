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
    it('Can successfully return a collection from a pre-order traversal', () => {
        expect(tree.preOrder()).toMatchObject([15, 11, 32, 50, 2, 12]);
    });
    it('Can successfully return a collection from an in-order traversal', () => {
        expect(tree.inOrder()).toMatchObject([32, 11, 50, 15, 2, 12]);
    });
    it('Can successfully return a collection from a post-order traversal', () => {
        expect(tree.postOrder()).toMatchObject([32, 50, 11, 12, 2, 15]);
    });
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
    it('Can instantiate a tree with only one node', () => {
        let tree1 = new BinaryTree(10);
        tree1.root.left = new BinaryTree(30);
        expect(tree1.root.value).toBe(10);
        expect(tree1.root.left.root.value).toBe(30);
        expect(tree1.root.right).toBeNull();
    });
    it('Can instantiate a tree with no values divisible by 3 or 5', () => {
        let tree1 = new BinaryTree(44);
        tree1.root.left = new BinaryTree(11);
        tree1.root.right = new BinaryTree(2);
        tree1.root.left.root.left = new BinaryTree(37);
        tree1.root.left.root.right = new BinaryTree(13);
        tree1.root.right.root.right = new BinaryTree(8);
        expect(FizzBuzzTree(tree1)).toBeTruthy();
    });
    it('Works on a tree with values divisible by 3, by 5 and by both 3 and 5', () => {
        let fizzBuzz = FizzBuzzTree(tree);
        expect(fizzBuzz.root.value).toBe('Fizz Buzz');
        expect(fizzBuzz.root.left.root.right.root.value).toBe('Buzz');
        expect(fizzBuzz.root.right.root.right.root.value).toBe('Fizz');
    });
    it('Does not accept no input', () => {
        let fizzyBuzzy = FizzBuzzTree();
        expect(fizzyBuzzy).toBe('Must pass in a node');
    });
});
