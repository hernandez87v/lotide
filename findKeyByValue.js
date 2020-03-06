// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😁😁Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😞😞Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE - not related to findKeyByValue task.
//assertEqual('Lighthouse Labs', 'Bootcamp');
//assertEqual(1, 1);

//the purpose of findByKeyValue is to take in an object and a value.
// - it scans the object and returns the first key that contains the given value
// -- if no key with that given value is found then it will RETURN undefined.
const bestTVShowsByGenre = {
  sci_fi: 'The Expanse',
  comedy: 'Brooklyn Nine-Nine',
  drama: 'The Wire'
};

const findKeyByValue = (obj, val) => {
  for (const value in obj) {
    // finds the key: "value" in our obj "bestTVShowsByGenre"
    if (val === obj[value]) {
      //checks the value "TV show" is equal to the genre
      return value;
    } // no need for else statement as loop ends undefined if doesnt match
  }
  return;
};

assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
assertEqual(findKeyByValue(bestTVShowsByGenre, 'Brooklyn Nine-Nine'), 'comedy');
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
//assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Office'), undefined);
