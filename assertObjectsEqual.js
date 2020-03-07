const eqObjects = function(object1, object2) {
  keys1 = Object.keys(object1);
  keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (eqArrays(object1[key], object2[key])) {
        return true;
      } else {
        return false;
      }
    }
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(
      `✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `🛑🛑🛑Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
  console.log(`Example label: ${inspect(actual)}`);
};

console.log(assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' }));
