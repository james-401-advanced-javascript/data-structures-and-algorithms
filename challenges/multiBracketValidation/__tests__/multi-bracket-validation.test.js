'use strict';

const multiBracketValidation = require('../multi-bracket-validation');
const Stack = require('../stack');

describe('The correct results from multi-bracket-validation', () => {
    it('returns the correct output', () => {
        expect(multiBracketValidation('{}')).toBe(true);
        expect(multiBracketValidation('{}(){}')).toBe(true);
        expect(multiBracketValidation('()[[Extra Characters]]')).toBe(true);
        expect(multiBracketValidation('(){}[[]]')).toBe(true);
        expect(multiBracketValidation('{}{Code}[Fellows](())')).toBe(true);
        expect(multiBracketValidation('[({}]')).toBe(false);
        expect(multiBracketValidation('(](')).toBe(false);
        expect(multiBracketValidation('{(})')).toBe(false);
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
