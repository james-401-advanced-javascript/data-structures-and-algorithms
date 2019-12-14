'use strict';

class Dog {
    constructor(name) {
        this.name = name;
        this.print = function() {
            console.log(`${name} is a good dog!`);
            return `${name} is a good dog!`;
        };
    }
}

module.exports = Dog;
