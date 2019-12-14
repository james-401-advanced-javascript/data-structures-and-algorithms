# Code Challenge 13 - Trees

## Links

- [challenge 13](https://github.com/james-401-advanced-javascript/data-structures-and-algorithms/pull/12)
- [travis](https://www.travis-ci.com/james-401-advanced-javascript/data-structures-and-algorithms)

- The point of this challenge is to create a Node class that has properties for the value stored in the node, the left child Node, and the right child Node.

## Challenge

- Create a Node class that has properties for the value stored in the node, the left child Node, and the right child Node.
- Create a BinaryTree class with the following defined properties and methods:
  - A root property that stores a Node representing the start of the tree
  - A preOrder method that traverses the tree using the pattern root >> left >> right and returns an array of the traversed values
  - An inOrder method that traverses the tree using the pattern left >> root >> right and returns an array of the traversed values
  - A postOrder method that traverses the tree using the pattern left >> right >> root and returns an array of the traversed values
- Create a BinarySearchTree class, extended from your BinaryTree class, with the following defined properties and methods:
  - An add method that accepts a value and adds a new Node with that value in the correct location in the binary search tree.
  - A method named contains that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.

## Approach & Efficiency

- For this challenge, I chose to first draw a diagram of what I was trying to accomplish. Then I wrote comments explaining what the goals were for each function. I made sure to write code to account for any potential errors and edge cases including receiving correct values. As for testing, I checked the return values to make sure they were correct in jest. I believe the Big O of my binaryTree operations is On(n log n) in space since a new array is being created in each recursive loop and the contents returned using destructuring. I'm referring to preOrder, inOrder, and postOrder here. For time, I believe it's O(log n) because the options are cut in half through each loop. I believe Big O for time and space for add and contains functions are also O(log n) because the options are halfed each recursive iteration.

## API

- BinaryTree.preOrder()

  - This method traverses the tree using the pattern root >> left >> right and returns an array of the traversed values.

- BinaryTree.inOrder()

  - This method traverses the tree using the pattern left >> root >> right and returns an array of the traversed values.

- BinaryTree.postOrder()

  - This method traverses the tree using the pattern left >> right >> root and returns an array of the traversed values.

- BinarySearchTree.add(val)

  - This method accepts a value and adds a new Node with that value in the correct location in the binary search tree.

- BinarySearchTree.contains(val)

  - This method accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.
