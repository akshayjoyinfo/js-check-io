"use strict";
/**
In a given text you need to sum the numbers. Only separated numbers should be counted. If a number is part of a word it shouldn't be counted.

The text consists from numbers, spaces and english letters

Input: A string.

Output: An int.

Example:

sumNumbers('hi') == 0
sumNumbers('who is 1st here') == 0
sumNumbers('my numbers is 2') == 2
sumNumbers('This picture is an oil on canvas '
 'painting by Danish artist Anna '
 'Petersen between 1845 and 1910 year') == 3755
sumNumbers('5 plus 6 is') == 11
sumNumbers('') == 0
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
function sumNumbers(test) {
    var inputs = test.split(' ');
    var sum = 0;
    inputs.forEach(x => {
        if (!isNaN(Number(x))) {
            sum += Number(x);
        }
    });
    return sum;
}
console.log('Example:');
console.log(sumNumbers('hi'));
// These "asserts" are used for self-checking
assert_1.default.equal(sumNumbers('hi'), 0);
assert_1.default.equal(sumNumbers('who is 1st here'), 0);
assert_1.default.equal(sumNumbers('my numbers is 2'), 2);
assert_1.default.equal(sumNumbers('This picture is an oil on canvas '
    + 'painting by Danish artist Anna '
    + 'Petersen between 1845 and 1910 year'), 3755);
assert_1.default.equal(sumNumbers('5 plus 6 is'), 11);
assert_1.default.equal(sumNumbers(''), 0);
console.log("Coding complete? Click 'Check' to earn cool rewards!");
