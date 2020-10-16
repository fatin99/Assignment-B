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
  describe('/PUT/:id mod', () => {
      it('it should UPDATE a mod given the id', (done) => {
          let mod = new Mod({
                code: "CS1101S",
                title: "Programming Methodology",
                department: "Computer Science",
                credits: 3
            })
            mod.save((err, mod) => {
                chai.request(server)
                .put('/module/' + mod.id)
                .send({
                    code: "CS1101S",
                    title: "Programming Methodology",
                    department: "Computer Science",
                    credits: 4
                })
                .end((err, res) => {
                      res.should.have.status(200);
                      res.body.should.be.a('object');
                      res.body.should.have.property('message').eql('mod updated!');
                      res.body.module.should.have.property('credits').eql(4);
                  done();
                });
          });
      });
  });
});