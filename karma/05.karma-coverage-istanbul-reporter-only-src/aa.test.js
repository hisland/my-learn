var aa = require('./aa');

describe('basic', function() {
  it('plus1', function() {
    expect(aa.halo(2)).toBe(3);
  })
  it('fail', function() {
    expect(aa.halo(2)).toBe(4);
  })
})
