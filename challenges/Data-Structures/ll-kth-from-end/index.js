'use strict';

let LinkedList = require('./lib/linked-list');

let list = new LinkedList();

list.insert('Node5');
list.insert('Node3');
list.insert('Node2');
list.insert('Node1');
list.insert('Node0');
list.append('Node6');
list.append('Node7');

list.insertAfter('Node3', 'Node4');
console.log(list.toString());

console.log(list.kthFromEnd(8)); // should be Node 5
