const tail = function(assertEqual) {
  let newArray = assertEqual.slice(1);
  return newArray;
};

module.exports = tail;
