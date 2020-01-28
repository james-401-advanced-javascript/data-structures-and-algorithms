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

    for (let i = 0; i < left.length; i++) {
        if (left[i].length === 1) {
            let index = left[i][0];
            joined.push(index);
            if (table2.contains(index[0])) {
                let match = table2.get(index[0]);
                joined[joined.indexOf(index)].push(match);
            } else {
                joined[joined.indexOf(index)].push(null);
            }
        }    else {
            for (let j in left[i]) {
                let index = left[i][j];
                joined.push(index);
                if (table2.contains(index[0])) {
                    joined[j].push(table2.get(index[0]));
                } else {
                    joined[joined.indexOf(index)].push(null);
                }
            }
        }
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