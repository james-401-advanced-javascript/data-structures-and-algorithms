# Code Challenge 09 - Stacks and Queues

- The point of this code challenge is to create functional stack and queue data structures.

## Challenge

- Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.

- Create a Stack class that has a top property. It creates an empty Stack when instantiated.

  - This object should be aware of a default empty value assigned to top when the stack is created.

  - Define a method called push which takes any value as an argument and adds a new Node with that value to the top of the stack with an O(1) time performance.

  - Define a method called pop that does not take any arguments and removes the Node from the top of the stack, and returns that popped Node’s value.

  - Define a method called peek that does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack.

- Create a Queue class that has a front property. It creates an empty Queue when instantiated.

  - This object should be aware of a default empty value assigned to front when the queue is created.

  - Define a method called enqueue which takes any value as an argument and adds a new Node with that value to the rear of the queue with an O(1) time performance.

  - Define a method called dequeue that does not take any arguments and removes the Node from the front of the queue, and returns the Node’s value.

  - Define a method called peek that does not take any arguments and returns the value of the Node located in the front of the queue, without removing it from the queue.

- Any exceptions or errors that come from your code should be handled or captured errors. For example, rather than a default error thrown, your code should raise/throw a custom, semantic error that describes what went wrong in calling the methods you wrote for this lab.

## Approach & Efficiency

- For this challenge, I chose first to write comments explaining what the goals were for each function. I wanted to make the code as clean as possible, but still expressive. The logic was fairly straight-forward since these were so similar to linked lists. As for the verification, I chose to run the console.log the stacks and queues in order to confirm the expected result.

<!-- EDIT ALL OF THIS BELOW -->

## API

- mergeLists(list1, list2)
  - This function takes in two lists as parameters, and return the head of the new list which alternates values, and the head of this new list.
