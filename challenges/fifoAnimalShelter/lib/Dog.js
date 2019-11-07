'use strict';

class Dog {
    constructor(name) {
        this.name = name;
        this.print = function() {
            console.log(`${name} is a sweet dog!`);
        };
    }
}

module.exports = Dog;
