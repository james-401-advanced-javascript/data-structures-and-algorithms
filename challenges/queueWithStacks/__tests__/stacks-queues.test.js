'use strict';

const PseudoQueue = require('../lib/pseudoQueue');
let Stack = require('../lib/stack');

describe('The proper functionality of a psuedo queue', () => {
    it('Can successfully enqueue into your pseudo queue', () => {
        let queue = new PseudoQueue();
        queue.enqueue(1);
        expect(queue.stack1.top.data).toBe(1);
    });
    it('Can successfully enqueue multiple values into your queue', () => {
        let queue = new PseudoQueue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        expect(queue.stack1.top.data).toBe(3);
    });
    it('Can successfully dequeue out of a queue the expected value', () => {
        let queue = new PseudoQueue();
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.dequeue()).toBe(1);
    });
    it('Can successfully empty a queue after multiple dequeues', () => {
        let queue = new PseudoQueue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.dequeue();
        queue.dequeue();
        queue.dequeue();
        expect(queue.stack1.top).toBeNull();
    });
    it('Can successfully instantiate an empty queue', () => {
        let queue = new PseudoQueue();
        expect(queue).toBeDefined();
    });
});
describe('The proper functionality of a stack', () => {
    it('Can successfully push onto a stack', () => {
        let stack = new Stack();
        stack.push(1);
        expect(stack.top).toBeDefined();
    });
    it('Can successfully push multiple values onto a stack', () => {
        let stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.top.next.next).toBeDefined();
    });
    it('Can successfully pop off the stack', () => {
        let stack = new Stack();
        stack.push(1);
        stack.push(2);
        expect(stack.pop()).toBe(2);
    });
    it('Can successfully empty a stack after multiple pops', () => {
        let stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.pop();
        stack.pop();
        stack.pop();
        expect(stack.top).toBeNull();
    });
    it('Can successfully peek the next item on the stack', () => {
        let stack = new Stack();
        stack.push(2);
        stack.push(1);
        expect(stack.peek()).toBe(1);
    });
    it('Can successfully instantiate an empty stack', () => {
        let stack = new Stack();
        expect(stack.top).toBeNull();
    });
});
