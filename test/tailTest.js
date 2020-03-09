const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it('This should fail', () => {
    assert.deepEqual(tail(['Lighthouse', 'Labs']), ['Labs']);
  });
});
