'use strict';

const HashTable = require('./hashtable');

function leftJoin(table1, table2) {
    // Create array of return values
    const joined = [];
    // Make table 1 that stores ['key', 'synonym']
    // Make table 2 that stores ['key', 'antonym']
    // If key not present in table2, print a value of null for its entry
    // account for different size tables
    // Error handling in case either value is empty or no value is entered
    if (!table1 || !table2 || table1.storage.length === 0 || table2.storage.length === 0) {
        return false;
    }
    
    let left = table1.storage.filter(item => item !== undefined);
    let right = table2.storage.filter(item => item !== undefined);
    // loop through tables for length of loopCount
    for (let i = 0; i < left.length; i++) {
        // create two scenarios
        // IF currentVal is not in table2
        // THEN push currentVal, and move on to next iteration
        if (left[i]) {
            if (left[i].length === 1) {
                joined[i].push(left[i]);
                console.log('lEFTY: ',left);
                if (!table2.contains(left[i][0])) {
                    continue;
                }
            } else {
                // IF currentVal IS in table2
                // THEN add its 'get' value to current index in joined array
                console.log('ITEM: ',left[i]);
                console.log('JOINED: ',joined);
                for (let j of left[i]) {
                    console.log('J ',j);
                    console.log(j[0]);
                    joined.push(j);
                    if (table2.contains(j[0])) {
                        joined[i].push(table2.get(j[0]));
                    }
                }
            }
        }

        // SCRATCH ALL OF THIS. 
        // LOOP THROUGH FIRST TABLE
        // PUSH ALL ITEMS TO ARRAY
        // FOR EACH ITEM IN THE TABLE.
        // IF table2.contains?
        // PUSH table2.get() to that index in the array
    }
    return joined;
}

const foo = new HashTable(5);
foo.add('one', 1);
foo.add('two', 2);
foo.add('three', 3);
foo.add('four', 4);
foo.add('five', 5);

const bar = new HashTable(3);
bar.add('one', 11);
bar.add('two', 22);
bar.add('three', 33);

console.log(leftJoin(foo, bar));
// console.log(foo.print());
// console.log(bar.print());
// console.log(foo.get('one'));