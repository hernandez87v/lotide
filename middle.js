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

const middle = function(array) {
  let midPoint = Math.floor(array.length / 2) - 1;
  if (array.length <= 2) {
    return [];
  }
  if (array.length % 2 === 0) {
    return [array[midPoint], array[midPoint + 1]];
  } else {
    return [array[midPoint]];
  }
};
console.log(middle([1, 2, 3]));
console.log(middle([1, 4]));
console.log(middle([1, 4, 5, 6]));
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
