const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }

  return results;
};

let assertArrayEqual = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log(`😞😞Assertion Failed: ${arr1} !== ${arr2}`);
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`😞😞Assertion Failed: ${arr1} !== ${arr2}`);
      return false;
    }
  }
  console.log(`😁😁Assertion Passed: ${arr1} === ${arr2}`);
  return true;
};
console.log(letterPositions('Hello'));
assertArrayEqual(letterPositions('Hello').e, [1]);
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
