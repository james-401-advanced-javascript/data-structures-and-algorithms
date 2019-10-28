'use strict';

let Stack = require('./lib/stack');
let Queue = require('./lib/queue');

let stack = new Stack();
let queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue);

console.log(queue.dequeue());
