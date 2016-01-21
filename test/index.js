var expect = require('expect.js'),
    express500Mock = require('../app'),
    supertest = require('supertest')(express500Mock);

describe('express-500-mock', function() {
  it('should respond with a 500', function(done) {
    supertest.get('/anyrandompath').expect(500, done);
  });
});
