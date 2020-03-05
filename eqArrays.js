// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😁😁Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😞😞Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE

let eqArrays = function(arr1, arr2) {
  //let output = '';
  if (arr1.length === arr2.length) {
    //output = true;
    return true;
  } else {
    return false;
    //output = false;
  }
  //return output;
};
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true); // => true
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), false); // => false
