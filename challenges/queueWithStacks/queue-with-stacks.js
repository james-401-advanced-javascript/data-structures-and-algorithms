'use strict';

const PseudoQueue = require('./lib/pseudoQueue');

let pQueue = new PseudoQueue();

pQueue.enqueue(1);
pQueue.enqueue(2);
pQueue.enqueue(3);
pQueue.enqueue(4);
console.log('PQ 1: ', pQueue);
console.log(pQueue.dequeue());