let assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`😁😁Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`😞😞Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

let eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const flatten = function(value) {
  return Array.isArray(value);
};

console.log(flatten([1, 2, 8])); //true
console.log(flatten('hello')); // false
console.log(flatten([1, 2, 8], [1, 4, 5, 6, 7, 8])); //true
