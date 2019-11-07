'use strict';

let AnimalShelter = require('./lib/AnimalShelter');
const Dog = require('./lib/Dog');
const Cat = require('./lib/Cat');

let shelter = new AnimalShelter();

shelter.enqueue(new Cat('Garfield'));
shelter.enqueue(new Cat('Felix'));
shelter.enqueue(new Dog('Doug'));

console.log('LIST 1: ', shelter);
console.log('SECOND ITEM: ', shelter.front.next.next);

shelter.dequeue('dog');
console.log('LIST 2: ', shelter);
console.log(shelter.dequeue('dog'));

//store current var
//store previous var
// let current = this.front;
// let previous = this.front;
// let previousCounter = this.front;
// previous.next = null;

// while (current.next) {
// make current front.next
// if current.data is what I'm looking for
// temp = current;
// previous.next = current.next
// temp.next = null;
// run temp.print();
// return this
// if (current.next.data.constructor.name.toLowerCase() === pref) {
//     let temp = current;
//     previous.next = current.next;
//     temp.next = null;
//     temp.data.print();
//     return this;
// } else {
//     let temp = current;
//     temp.next = null;
//     previous.next = temp;
//     current = current.next;
// }
/*
                1 var to store this.front []
                temp/current.next = null
                front.next = current
                counter = front.next

                THEN

                this.front = previous
                */
