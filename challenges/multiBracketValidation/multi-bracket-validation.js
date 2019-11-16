'use strict';

const Stack = require('./stack');
const stack = new Stack();

/*
On your main file, create a function called multiBracketValidation(input). Your function should take a string as its only argument, and should return a boolean representing whether or not the brackets in the string are balanced. There are 3 types of brackets:
 */

function multiBracketValidation(str) {
    // if opening, then push onto stack
    // if closing character, make sure it matches stack.top
    str.split('').forEach(char => {
        switch (char) {
        case '[':
            stack.push(char);
            break;
        case '(':
            stack.push(char);
            break;
        case '{':
            stack.push(char);
            break;
        case ']':
            if (stack.top && stack.top.data === '[') {
                stack.top = stack.top.next;
            } else {
                return stack;
            }
            break;
        case ')':
            if (stack.top && stack.top.data === '(') {
                stack.top = stack.top.next;
            } else {
                return stack;
            }
            break;
        case '}':
            if (stack.top && stack.top.data === '{') {
                stack.top = stack.top.next;
            } else {
                return stack;
            }
            break;
        default:
            return stack;
        }
    });
    if (!stack.top) {
        return true;
    } else {
        return false;
    }
}

module.exports = multiBracketValidation;


// {}	                    TRUE
// {}(){}	                TRUE
// ()[[Extra Characters]]	TRUE
// (){}[[]]	                TRUE
// {}{Code}[Fellows](())	TRUE
// [({}]	                FALSE
// (](	                    FALSE
// {(})                     FALSE
