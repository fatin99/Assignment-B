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
  describe('/DELETE/:id mod', () => {
      it('it should DELETE a mod given the id', (done) => {
          let mod = new Mod({
                code: "CS1101S",
                title: "Programming Methodology",
                department: "Computer Science",
                credits: 4
            })
            mod.save((err, mod) => {
                chai.request(server)
                .delete('/module/' + mod.id)
                .end((err, res) => {
                      res.should.have.status(200);
                      res.body.should.be.a('object');
                      res.body.should.have.property('message').eql('mod successfully deleted!');
                      res.body.result.should.have.property('ok').eql(1);
                      res.body.result.should.have.property('n').eql(1);
                  done();
                });
          });
      });
  });
});