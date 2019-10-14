'use strict';

let LinkedList = require('./lib/linked-list');

let list = new LinkedList();

list.insert('Node5');
list.insert('Node4');
list.insert('Node3');
list.insert('Node2');
list.insert('Node1');
list.insert('Node0');

console.log(list.includes('Node0'));
console.log(list.includes('Node44'));
console.log(list.toString());
