# Challenge 20: Merge Sort

## Links

- [Challenge 20](https://github.com/james-401-advanced-javascript/data-structures-and-algorithms/pull/18)
- [travis](https://www.travis-ci.com/james-401-advanced-javascript/data-structures-and-algorithms)

### In this challenge, the task is to write an merge-sort algorithm

## Whiteboard / Drawing

![Merge Sort](./images/merge-sort.jpg)

## Challenge

### The point of this challenge is to write a function called mergeSort, which takes an array of numbers and returns a sorted array after using the Merge Sort algorithm. Do not mutate (change) the array given to you as a parameter

## Approach & Efficiency

### My approach to this challenge was to first draw the UML diagram of what the algorithm and function should be doing. As part of the UML, I tried a quick run though of what the actual code may look like. After that, I wrote comments to keep track of my goals/tasks and began writing the actualy function. The Big O of space for this algorithm is O(1) because only a single data structure is created within it, that being the empty array that is to be returned. The Big O of time is O(n log n) because the likely worse case scenario is that the function will iterate through each item in the input array once, but the while loop inside the for loop indicates that it will meet its terminating condition before a second full iteration is reached
