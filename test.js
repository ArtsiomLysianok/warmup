const assert = require('assert');
const warmup = require('./src/index.js');

describe('warmup', () => {
  it('warm cold', () => {
    const fahrenheit = warmup(-20);
    assert.deepEqual(fahrenheit, -4);
  });

  // just addded a comment
  it('warm cool', () => {
    const fahrenheit = warmup(0);
    assert.deepEqual(fahrenheit, 32);
  });
// just addded another one comment
  it('warm medium', () => {
    const fahrenheit = warmup(15);
    assert.deepEqual(fahrenheit, 59);
  });

  it('warm hot', () => {
    const fahrenheit = warmup(40);
    assert.deepEqual(fahrenheit, 104);
  });
  
  it('warm hot fail', () => {
    const fahrenheit = warmup(40);
    assert.deepEqual(fahrenheit, 1245235);
  });
});
