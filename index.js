// index.js
// const head = require('./head');
// const tail = require('./tail');
// const middle = require('./middle');

// module.exports = {
//   head: head,
//   tail: tail,
//   middle: middle
// };

const module.exports = {
    head: require('./head'),
    tail: require('./tail'),
    middle: require('./middle')
};

const { head, tail, middle } = module.exports;
