# Code Challenge 12 - Animal Shelter Queue

## Links

- [challenge 12](https://github.com/james-401-advanced-javascript/data-structures-and-algorithms/pull/11)
- [travis](https://www.travis-ci.com/james-401-advanced-javascript/data-structures-and-algorithms)

* The point of this challenge is to build a Queue that represents an animal shelter.

## Challenge

- Create a brand new PseudoQueue class. Do not use an existing Queue. Instead, this PseudoQueue class will implement our standard queue interface (the two methods listed below), but will internally only utilize two Stack objects.

- Ensure that you create your class with the following methods:

  - enqueue(value) which inserts value into the PseudoQueue, using a last-in, last-out approach.

  - dequeue() which extracts a value from the PseudoQueue, using a first-in, first-out approach.

  - The Stack instances have only push, pop, and peek methods. You should use your own Stack implementation.

  - Instantiate these Stack objects in your PseudoQueue constructor.

## Approach & Efficiency

- For this challenge, I chose to first draw a diagram of what I was trying to accomplish. Then I wrote comments explaining what the goals were for each function. I focused much more on edge cases and making sure the class was functioning as intended. As for the verification, I chose to run the console.log on the queue in order to confirm the expected result. I believe the Big O of all of the operations is O2(n).

## API

- PseudoQueue.enqueue(obj)

  - This function takes in an object and enqueues that to the front of an instantiated pseudoqueue using a Stack's functionality.

- PseudoQueue.dequeue()

  - This function dequeues and returns the node at the front of the instantiated pseudoqueue using a Stack's functionality.
