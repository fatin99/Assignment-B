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
  /*
  * Test the /GET/:id route
  */
 describe('/GET/:id mod', () => {
      it('it should GET a mod by the given id', (done) => {
          let mod = new Mod({ 
              code: "CS1101S",
              title: "Programming Methodology",
              department: "Computer Science",
              credits: 4
          });
          mod.save((err, mod) => {
              chai.request(server)
            .get('/module/' + mod.id)
            .send(mod)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('code');
                  res.body.should.have.property('title');
                  res.body.should.have.property('department');
                  res.body.should.have.property('credits');
                  res.body.should.have.property('_id').eql(mod.id);
              done();
            });
          });

      });
  });
});