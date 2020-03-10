const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it('This should pass', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  //   assert.strictEqual(middle([1, 4]));
  //   assert.strictEqual(middle([1, 4, 5, 6]));
  //   assert.strictEqual(middle([1, 2, 3, 4])); // => [2, 3]
  //   assert.strictEqual(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
});
