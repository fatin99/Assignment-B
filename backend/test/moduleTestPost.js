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
  describe('/POST mod', () => {
      it('it should not POST a mod without credits field', (done) => {
          let mod = {
              code: "CS1101S",
              title: "Programming Methodology",
              department: "Computer Science"
          }
            chai.request(server)
            .post('/module')
            .send(mod)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('errors');
                  res.body.errors.should.have.property('credits');
                  res.body.errors.credits.should.have.property('kind').eql('required');
              done();
            });
      });
      it('it should POST a mod ', (done) => {
          let mod = {
            code: "CS1101S",
            title: "Programming Methodology",
            department: "Computer Science",
            credits: 4
          }
            chai.request(server)
            .post('/module')
            .send(mod)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('message').eql('mod successfully added!');
                  res.body.module.should.have.property('code');
                  res.body.module.should.have.property('title');
                  res.body.module.should.have.property('department');
                  res.body.module.should.have.property('credits');
              done();
            });
      });
  });
});