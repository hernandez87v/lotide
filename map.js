const words = ['ground', 'control', 'to', 'major', 'tom'];
const words2 = ['land', 'remote', 'three', 'uge', 'ford'];
const words3 = ['fround', 'bontrol', 'to', 'rajor', 'nom'];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
//console.log(map);
const results1 = map(words, word => word[0]);
const results2 = map(words2, word => word[0]);
const results3 = map(words3, word => word[0]);

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


assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, [ 'l', 'r', 't', 'u', 'f' ]);
assertArraysEqual(results3, [ 'f', 'b', 't', 'r', 'n' ]);