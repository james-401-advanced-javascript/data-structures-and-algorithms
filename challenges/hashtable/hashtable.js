class HashTable {
    constructor(max) {
        this.max = max;
        this.storage = [];
    }
  
    // write hash function
    hash(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash += str.charCodeAt(i);
        }
        return hash % this.max;
    }
  
    // write add/update function
    add(key, value) {
        let index = this.hash(key);
        // if no storage[index], then that index equals an array with this key value pair
        if (this.storage[index] === undefined) {
            this.storage[index] = [[key, value]];
        } else {
            // if storage[index] exists >> push value to array alreay in place
            let inserted = false;
            for (var i = 0; i < this.storage[index].length; i++) {
                // if key already exists in storage array
                // update value with value passed in
                if (this.storage[index][i] && this.storage[index][i][0] === key) {
                    this.storage[index][i][1] = value;
                    inserted = true;
                }
            }
            // if key does not exist in storage array
            // push [key, value] array to storage object
            if (inserted === false) {
                this.storage[index].push([key, value]);
            }
        }
    }

    // write remove function
    remove(key) {
        // if only one item in storage array that matches key,
        // remove that item
        let index = this.hash(key);
        if (this.storage[index] === undefined) {
            return false;
        }
        // if index exists, and has more than 1 item
        // loop through array and delete item if present
        let removed = false;
        for (let i = 0; i < this.storage[index].length; i++) {
            if (this.storage[index][i] && this.storage[index][i][0] === key) {
                delete this.storage[index][i];
                removed = true;
            } 
        }
        return removed;
    }

    // write get function
    get(key) {
        // if only one item in storage array that matches key,
        // remove that item
        let index = this.hash(key);
        if (this.storage[index] === undefined) {
            return null;
        }
        // if index exists, and has more than 1 item
        // loop through array and delete item if present
        for (let i = 0; i < this.storage[index].length; i++) {
            if (this.storage[index][i] && this.storage[index][i][0] === key) {
                return this.storage[index][i][1];
            } 
        }
        return null;
    }
  
    // write contains function
    contains(key) {
        let index = this.hash(key);
        if (this.storage[index] === undefined) {
            return false;
        }
        // if index exists, and has more than 1 item
        // loop through array and delete item if present
        for (let i = 0; i < this.storage[index].length; i++) {
            if (this.storage[index][i] && this.storage[index][i][0] === key) {
                return true;
            } 
        }
        return false;
    }

    // write get/print function
    print() {
        return this.storage;
    }
    
}
  
// let hTable1 = new HashTable(5);

// let table = new HashTable(5);
// table.add('Dean', 'student');
// table.add('Dane', 'student');
// table.add('James', 'instructor');
// console.log(table.print());

module.exports = HashTable;
  
// hTable1.add('barnabie', 'sheep');
// hTable1.add('willy', 'elephant');
// hTable1.add('joseph', 'parrot');
// hTable1.print();

// let foo = hTable1.contains('willy');
// console.log(foo);
// let bar = hTable1.contains('matt');
// console.log(bar);
// let baz = hTable1.contains('barnabie');
// console.log(baz);
// hTable1.contains('matt');
// hTable1.contains('matt');
// console.log(hTable1.storage[0]);