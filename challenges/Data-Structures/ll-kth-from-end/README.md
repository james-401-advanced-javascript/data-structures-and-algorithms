# Code Challenge 07 - Singly Linked List with K-th Search Method

- The point of this code challenge will be to write a function which finds a node that is k spaces away from the end (or tail) of a linked list.

## Challenge

- Write a method for the LinkedList class which takes a number, k, as a parameter, and return the node’s value that is k from the end of the linked list.

## Approach & Efficiency

- For this challenge, I chose first to write comments explaining what the goals were for each function. I wanted to make the code as clean as possible, but still expressive. The logic was fairly straight-forward. As for the verification, I chose to run the console.log the return value to confirm the expected result. I believe the Big O of this challenge is O(n²) because I use a while loop to count how many items are in the list, and another loop to get to the node that is Kth from the end.

## API

- kthFromEnd(k)
  - This function takes a number, k, as a parameter, and return the node’s value that is k from the end of the linked list.
