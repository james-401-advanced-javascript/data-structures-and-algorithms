'use strict';

function leftJoin(table1, table2) {
    // Create array of return values
    const joined = [];

    // Error handling in case either value is empty or no value is entered
    if (!table1 || !table2 || table1.storage.length === 0 || table2.storage.length === 0 || table1.constructor.name !== 'HashTable' || table2.constructor.name !== 'HashTable') {
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
        } else {
            for (let j in left[i]) {
                let index = left[i][j];
                joined.push(index);
                if (table2.contains(index[0])) {
                    joined[joined.indexOf(index)].push(table2.get(index[0]));
                } else {
                    joined[joined.indexOf(index)].push(null);
                }
            }
        }
    }
    return joined;
}

module.exports = leftJoin;
