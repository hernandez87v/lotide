const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

console.log(middle([1, 2, 3]));
console.log(middle([1, 4]));
console.log(middle([1, 4, 5, 6]));
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
