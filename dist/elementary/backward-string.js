"use strict";
/**
You should return a given string in reverse order.

Input: A string.

Output: A string.

Example:

backwardString('val') == 'lav'
backwardString('') == ''
backwardString('ohho') == 'ohho'
backwardString('123456789') == '987654321'
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
function backwardString(value) {
    return value.toString().split('').reverse().join('');
}
console.log('Example:');
console.log(backwardString('123456789'));
// These "asserts" are used for self-checking
assert_1.default.equal(backwardString('val'), 'lav');
assert_1.default.equal(backwardString(''), '');
assert_1.default.equal(backwardString('ohho'), 'ohho');
assert_1.default.equal(backwardString('123456789'), '987654321');
console.log("Coding complete? Click 'Check' to earn cool rewards!");
