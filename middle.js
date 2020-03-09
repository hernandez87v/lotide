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

module.exports = middle;
