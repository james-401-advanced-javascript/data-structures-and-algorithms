'use strict';

let LinkedList = require('./lib/linked-list');

let list1 = new LinkedList();
let list2 = new LinkedList();
let list3 = new LinkedList();

list1.insert('Node1');

list2.insert('Node2');

console.log(list1.toString());
console.log(list2.toString());

// LinkedList {
//     head: Node { data: 'Node1', next: Node { data: 'Node3', next: [Node] } }

// Create function that takes in two lists
function mergeLists(listA, listB) {
    // make sure both lists are not null
    if (!listA || !listB || !listA.head || !listB.head) {
        console.log('This function requires two linked lists');
        return -1;
    }
    // create new linked list
    let newList = new LinkedList();
    // store listA head and listB head in variables
    // these variables will increment using next
    // this is done so that the values can be preserved outside of the new linked list
    let indexA = listA.head;
    let indexB = listB.head;
    // append indexA.data as newList.head
    // then append indexB.data before starting loop
    newList.append(indexA.data);
    newList.append(indexB.data);
    while (indexA.next || indexB.next) {
        if (indexA.next) {
            newList.append(indexA.next.data);
            indexA = indexA.next;
        }
        if (indexB.next) {
            newList.append(indexB.next.data);
            indexB = indexB.next;
        }
    }
    console.log(newList.toString());
    return newList.toString();
}

mergeLists(list1, list2);

module.exports = mergeLists;
