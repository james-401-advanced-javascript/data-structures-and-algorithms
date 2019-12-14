'use strict';

let AnimalShelter = require('./lib/AnimalShelter');
const Dog = require('./lib/Dog');
const Cat = require('./lib/Cat');

let shelter = new AnimalShelter();

shelter.enqueue(new Cat('Garfield'));
shelter.enqueue(new Cat('Felix'));
shelter.enqueue(new Dog('Doug'));

shelter.dequeue('dog');
