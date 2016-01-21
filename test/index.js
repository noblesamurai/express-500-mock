var expect = require('expect.js'),
    express500Mock = require('..');

describe('express-500-mock', function() {
  it('should say hello', function(done) {
    expect(express500Mock()).to.equal('Hello, world');
    done();
  });
});
