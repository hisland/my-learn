var mongoose = require('mongoose');

var assert = require("assert");


describe('Schema', function() {
  it('is constructor', function() {
    console.log(blogSchema instanceof Schema);
    assert.equal(blogSchema.prototype);
  })
})
