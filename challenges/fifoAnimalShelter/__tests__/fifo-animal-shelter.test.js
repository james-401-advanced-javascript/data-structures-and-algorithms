'use strict';

const AnimalShelter = require('../lib/AnimalShelter');
let shelter = new AnimalShelter();
const Dog = require('../lib/Dog');
const Cat = require('../lib/Cat');

describe('The proper functionality of the Animal Shelter queue', () => {
    it('Can successfully enqueue a Dog', () => {
        let newEntry = shelter.enqueue(new Dog('Fido'));
        console.log(newEntry);
    });
    it('Can successfully enqueue a Cat', () => {
        let newEntry = shelter.enqueue(new Cat('Maxine'));
        console.log(newEntry);
    });
    it('Error handling when you try to enqueue something that is neither a Dog nor a Cat', () => {});
    it('Can successfully dequeue a Dog', () => {});
    it('Can successfully dequeue a Cat', () => {});
    it('Can successfully dequeue the front of the AnimalShelter queue when you pass no parameters to dequeue', () => {});
    it('Error handling when you try to dequeue something that is neither a "cat", "dog" or an empty string', () => {});
    it('Can successfully print the resulting object from a dequeue action', () => {});
});
