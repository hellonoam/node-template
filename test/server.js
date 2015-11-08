import { assert } from 'chai'

import server from '../server'
import supertest from 'supertest'

describe('server', function () {
  let request

  beforeEach(function () {
    request = supertest(server)
  })

  it('hello', function () {
    // request.get("/rooms/active")
    //   .expect(200)
    //   .end (err, res) =>
    //     expect(err).to.be null
    //     rooms = res.body
    //     expect(rooms.map('id').sort()).to.eql([room_1, room_2, room_3].map('id').sort())
    //     done()
  })
})

// var request = require('supertest');
// describe('loading express', function () {
//   var server;
//   beforeEach(function () {
//     server = require('./server');
//   });
//   afterEach(function () {
//     server.close();
//   });
//   it('responds to /', function testSlash(done) {
//   request(server)
//     .get('/')
//     .expect(200, done);
//   });
//   it('404 everything else', function testPath(done) {
//     request(server)
//       .get('/foo/bar')
//       .expect(404, done);
//   });
// });
