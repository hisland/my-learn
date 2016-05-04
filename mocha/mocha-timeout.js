describe('group1', function() {
  this.timeout(200); // 只控制当前 group
  it('test1', function(done) {
    this.timeout(400); // 只控制当前 test
    setTimeout(done, 300); // sucess
  });
  it('test1', function(done) {
    // 受group的200控制
    setTimeout(done, 300); // fail
  });
})

describe('group2', function() {
  // 恢复到默认的2s, 不受前一个控制
  it('test1', function(done) {
    setTimeout(done, 300); // sucess
  });
})
