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

console.log(assertArrayEqual([1, 2, 3], [1, 2, 3]));
console.log(assertArrayEqual([1, 2, 3], [1, 2, 3, 4]));
console.log(assertArrayEqual([1, 2, 3], [3, 2, 1, 4])); // => false
console.log(assertArrayEqual(['1', '2', '3'], ['1', '2', '3'])); // => true
console.log(assertArrayEqual(['1', '2', '3'], ['1', '2', 3])); // => false
