'use strict';

class Node {
    constructor(value) {
        this.value = value || null;
        this.left = null;
        this.right = null;
        this.seen = null;
        this.next = null;
    }
}

module.exports = Node;
