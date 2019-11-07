'use strict';

class Cat {
    constructor(name) {
        this.name = name;
        this.print = function() {
            console.log(`${name} is a sweet cat!`);
            return `${name} is a sweet cat!`;
        };
    }
}

module.exports = Cat;
