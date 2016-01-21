var expect = require('expect.js'),
    express500Mock = require('../app'),
    supertest = require('supertest')(express500Mock);

describe('express-500-mock', function() {
  it('should say hello', function(done) {
    supertest.get('/').expect(500, done);
  });
});
