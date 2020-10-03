process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Mod = require('../app/models/moduleModel');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();


chai.use(chaiHttp);

describe('mods', () => {
    beforeEach((done) => {
        Mod.remove({}, (err) => {
           done();
        });
    });
  describe('/GET mod', () => {
      it('it should GET all the mods', (done) => {
            chai.request(server)
            .get('/module')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                  res.body.length.should.be.eql(0);
              done();
            });
      });
  });
});