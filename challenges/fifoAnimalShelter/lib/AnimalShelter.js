'use strict';

const Node = require('./node');

class AnimalShelter {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    // push = add to beginning of list
    enqueue(value) {
    // Error handling if value is undefined
        if (value === undefined) {
            console.error('Must pass in a value');
            return -1;
        }
        // Error handling if object is not cat or dog
        if (value.constructor.name !== 'Dog') {
            if (value.constructor.name !== 'Cat') {
                return 'This queue is only for cats and dogs';
            }
        }
        

        let node = new Node(value);

        // if no front
        // make current value front
        // if there is a front
        // make current node value front's next value
        // add current value to end of queue
        if (!this.front) {
            this.front = node;
            this.rear = node;
        } else {
            this.rear.next = node;
            this.rear = node;
        }
        return this;
    }

    // Dequeue and return the front of the queue
    dequeue(pref) {
    // If there is no front, that must mean that the queue is empty
    // return -1 if queue is empty
        if (!this.front) {
            console.log('The queue is empty');
            return -1;
        }
        if (!pref || this.front.data.constructor.name.toLowerCase() === pref) {
            let temp = this.front;
            this.front = this.front.next;
            temp.next = null;
            return temp.data;
        } else {
            //store current var
            //store previous var
            let current = this.front.next;
            let previous = this.front;

            while (current.next) {
                // make current front.next
                // if current.data is what I'm looking for
                // temp = current;
                // previous.next = current.next
                // temp.next = null;
                // run temp.print();
                // return this
                if (current.data.constructor.name.toLowerCase() === pref) {
                    let temp = current;
                    previous.next = current.next;
                    temp.next = null;
                    temp.data.print();
                    return this;
                } else {
                    previous = current;
                    current = current.next;
                }
            }
            // If last item in list is one we're looking for, remove it
            // then set the rear to the item before the last item
            if (current.data.constructor.name.toLowerCase() === pref) {
                let temp = current;
                previous.next = current.next;
                this.rear = previous;
                temp.next = null;
                temp.data.print();
                return this;
            }
            // Return message if item is not in queue
            return 'There are none of those animals in the queue';
        }
    }
}

module.exports = AnimalShelter;
