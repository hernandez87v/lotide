// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😁😁Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😞😞Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
// assertEqual('Lighthouse Labs', 'Bootcamp');
// assertEqual(1, 1);

const countLetters = function(str) {
  const spacesGone = str.split(' ').join('');
  const charCounts = {};
  for (const character of spacesGone) {
    console.log(character);
    if (!charCounts[character]) {
      charCounts[character] = 1;
    } else {
      charCounts[character]++;
    }
  }
  console.log(charCounts);
  return charCounts;
};

const letterCount = countLetters('hello hi');
assertEqual(letterCount.h, 2);
assertEqual(letterCount.l, 2);
