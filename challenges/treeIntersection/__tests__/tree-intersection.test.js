const treeIntersection = require('../tree-intersection');
const BinaryTree = require('../binary-tree');
const Node = require('../node');

// const tree = new BinaryTree(100);

// tree.root.left = new Node(40);
// tree.root.right = new Node(2);
// tree.root.left.left = new Node(80);
// tree.root.left.right = new Node(40);
// tree.root.right.left = new Node(5);
// tree.root.right.right = new Node(9);

// const tree2 = new BinaryTree(101);

// tree2.root.left = new Node(3);
// tree2.root.right = new Node(90);
// tree2.root.left.left = new Node(40);
// tree2.root.left.right = new Node(80);
// tree2.root.right.left = new Node(5);
// tree2.root.right.right = new Node(1);


// let foo = treeIntersection(tree.root, tree2.root);
describe('The proper functionality of tree-intersrection algorithm', () => {
    test('Binary trees with no shared values', () => {
        const tree = new BinaryTree(100);
        tree.root.left = new Node(40);
        tree.root.right = new Node(2);
        tree.root.left.left = new Node(80);
        tree.root.right.right = new Node(9);

        const tree2 = new BinaryTree(101);
        tree2.root.left = new Node(33);
        tree2.root.right = new Node(90);
        tree2.root.left.left = new Node(54);
        tree2.root.right.right = new Node(1);

        expect(treeIntersection(tree.root, tree2.root)).toEqual([]);
    });
    test('Identical binary trees (all values shared)', () => {
        const tree = new BinaryTree(100);
        tree.root.left = new Node(40);
        tree.root.right = new Node(2);
        tree.root.left.left = new Node(80);
        tree.root.right.right = new Node(9);

        const tree2 = new BinaryTree(100);
        tree2.root.left = new Node(40);
        tree2.root.right = new Node(2);
        tree2.root.left.left = new Node(80);
        tree2.root.right.right = new Node(9);

        expect(treeIntersection(tree.root, tree2.root)).toEqual([100,40,80,2,9]);
    });
    test('Binary trees of vastly different sizes (for example, one has just a single node, another has 20 nodes)', () => {
        const tree = new BinaryTree(100);

        const tree2 = new BinaryTree(145);
        tree2.root.left = new Node(40);
        tree2.root.right = new Node(2);
        tree2.root.left.left = new Node(80);
        tree2.root.left.right = new Node(100);
        tree2.root.right.left = new Node(93);
        tree2.root.right.right = new Node(534);
        tree2.root.left.left.left = new Node(36);
        tree2.root.left.left.right = new Node(468);
        tree2.root.left.right.left = new Node(843);
        tree2.root.left.right.right = new Node(62);
        tree2.root.right.right.left = new Node(288);
        tree2.root.right.right.right = new Node(22);
        tree2.root.right.right.right.left = new Node(12);
        tree2.root.right.right.right.right = new Node(97);

        expect(treeIntersection(tree.root, tree2.root)).toEqual([100]);
    });
    test('Incorrect parameters', () => {
        expect(treeIntersection()).toEqual(false);
        expect(treeIntersection({test: 'property'})).toEqual(false);
    });
});
