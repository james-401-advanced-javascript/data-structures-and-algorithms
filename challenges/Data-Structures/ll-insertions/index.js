'use strict';

let LinkedList = require('./lib/linked-list');

let list = new LinkedList();

list.insert('Node3');
list.insert('Node2');
list.insert('Node1');
list.insert('Node0');
console.log(list.toString());

list.append('Node4');
list.append('Node5');
console.log(list.toString().slice(-7, -1));
