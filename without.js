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

let without = function(source, itemsToRemove) {
  let unmatch = [];

  for (const elem of source) {
    let found = false;
    for (const elem2 of itemsToRemove) {
      if (elem === elem2) {
        found = true;
      }
    }
    if (found === false) {
      unmatch.push(elem);
    }
  }
  return unmatch;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(['1', '2', '3'], [1, 2, '3'])); // => ["1", "2"]
