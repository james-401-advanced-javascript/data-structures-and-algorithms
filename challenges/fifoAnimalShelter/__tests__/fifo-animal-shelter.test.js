'use strict';

const AnimalShelter = require('../lib/AnimalShelter');
let shelter = new AnimalShelter();
const Dog = require('../lib/Dog');
const Cat = require('../lib/Cat');

describe('The proper functionality of the Animal Shelter queue', () => {
    it('Can successfully enqueue a Dog', () => {
        shelter.enqueue(new Dog('Fido'));
        expect(shelter.front.data.constructor.name).toBe('Dog');
    });
    it('Can successfully enqueue a Cat', () => {
        shelter.enqueue(new Cat('Felix'));
        expect(shelter.rear.data.constructor.name).toBe('Cat');
    });
    it('Error handling when you try to enqueue something that is neither a Dog nor a Cat', () => {
        let testShelter = new AnimalShelter();
        expect(testShelter.enqueue(new Array(4))).toBe(
            'This queue is only for cats and dogs'
        );
    });
    it('Can successfully dequeue a Dog', () => {
        expect(shelter.dequeue('dog').name).toBe('Fido');
    });
    it('Can successfully dequeue a Cat', () => {
        shelter.enqueue(new Cat('Garfield'));
        expect(shelter.dequeue('cat').name).toBe('Felix');
    });
    it('Can successfully dequeue the front of the AnimalShelter queue when you pass no parameters to dequeue', () => {
        let front = shelter.front.data;
        expect(shelter.dequeue().name).toBe(front.name);
    });
    it('Error handling when you try to dequeue something that is neither a "cat", "dog" or an empty string', () => {
        expect(shelter.dequeue('')).toBe(-1);
    });
    it('Can successfully print the resulting object from a dequeue action', () => {
        shelter.enqueue(new Cat('Max'));
        shelter.enqueue(new Dog('Fang'));
        expect(shelter.dequeue().print()).toBe('Max is a sweet cat!');
    });
});
