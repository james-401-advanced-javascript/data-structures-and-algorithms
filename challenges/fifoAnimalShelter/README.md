# Code Challenge 12 - Animal Shelter Queue

## Links

- [challenge 12](https://github.com/james-401-advanced-javascript/data-structures-and-algorithms/pull/11)
- [travis](https://www.travis-ci.com/james-401-advanced-javascript/data-structures-and-algorithms)

- The point of this challenge is to build a Queue that represents an animal shelter.

## Challenge

- Create a Dog and Cat class. These classes should share the following properties:
  - name: a string representing the name of this animal
  - print(): a function that prints
    - \${name} is a good dog! if this is a Dog object
    - \${name} is a sweet cat! if this is a Cat object
- Create a Queue class called AnimalShelter which holds only Dogs and Cats
- Add a function enqueue(animal) which adds the specified Dog or Cat object into the shelter
- Add a function dequeue(pref) which dequeues either the first Dog or the first Cat object in the queue, depending on what pref is (pref may be a string that is either empty, 'cat' or 'dog')
- If pref is an empty string, dequeue the first animal in the queue, regardless of if it’s a Dog or Cat
- After you dequeue, call the print function on the dequeued object

## Approach & Efficiency

- For this challenge, I chose to first draw a diagram of what I was trying to accomplish. Then I wrote comments explaining what the goals were for each function. I made sure to write code to account for any potential errors and edge cases including the desired animal being the only one in the queue or located at the end of the queue. As for the verification, I chose to run the print method on the animal object that was being dequeued. I also returned the string console.logged by the same method in order to confirm the correct output in jest testing. I believe the Big O of all of the operations is O(n) because no additional data structures are created (as far as space goes) and at most, the queue will be iterated over only as many times as there are objects or nodes inside of it.

## API

- AnimalShelter.enqueue(obj)

  - This function takes in only either an object from the Dog class or the Cat class, and enqueues that to the front of an instantiated AnimalShelter queue.

- AnimalShelter.dequeue(string)

  - This function takes an optional string argument. If the string says 'cat', it removes the first cat from the front of the queue and runs its print() method. If the string says 'dog', it does the same action for the first dog object in the queue. If no argument is provided or an empty string is provided, it dequeues and returns whichever node/animal is at the front of the instantiated AnimalShelter queue.
