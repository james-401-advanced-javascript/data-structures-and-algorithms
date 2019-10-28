'use strict';

let Stack = require('./lib/stack');
let Queue = require('./lib/queue');

let stack = new Stack();
let queue = new Queue();

stack.push(3);
stack.push(2);
stack.push(1);

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

stack.peek();
queue.peek();
