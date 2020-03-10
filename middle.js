const middle = function(array) {
  let midPoint = Math.floor(array.length / 2);
  console.log(midPoint);
  let newStr = [];
  if (array.length <= 2) {
    return [];
  }
  if (array.length % 2 === 0) {
    newStr.push(array[midPoint]);
    newStr.push(array[midPoint - 1]);
    return newStr;
  } else {
    newStr.push(array[midPoint]);
    return newStr;
  }
};

module.exports = middle;
