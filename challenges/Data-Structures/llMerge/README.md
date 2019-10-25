# Code Challenge 08 - Merge Two Linked Lists

- The point of this code challenge is to merge two linked lists into one.

## Challenge

- Write a method called mergeLists which takes two linked lists as arguments
- Merge the two lists together such that the final linked list has nodes that alternate between the nodes from each source list
- Return the head of the new merged list

## Approach & Efficiency

<!-- EDIT ALL OF THIS BELOW -->

- For this challenge, I chose first to write comments explaining what the goals were for each function. I wanted to make the code as clean as possible, but still expressive. The logic was fairly straight-forward. As for the verification, I chose to run the console.log the linked list in order to confirm the expected result. Once I was able to confirm the function was working as intended, I returned the head of the new linked list as instructed. Then I tested by finding the head.data value of the linked lists. I believe the Big O of this challenge is O(n) because at maximum, the function will run all the way through each linked list passed into the function only once.

## API

- mergeLists(list1, list2)
  - This function takes in two lists as parameters, and return the head of the new list which alternates values, and the head of this new list.
