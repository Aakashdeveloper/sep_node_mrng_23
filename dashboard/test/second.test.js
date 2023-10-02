let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = chai.expect;
chai.use(chaiHttp);

describe('Testing Api',() => {
    it('should return 200 for users',(done) => {
        chai.request('http://127.0.0.1:7710')
        .get('/users')
        .then((res) => {
            expect(res).to.have.status(200);
            done()
        })
        .catch((err) => {
            throw err
        })
    })
    it('should return 200 for health',(done) => {
        chai.request('http://127.0.0.1:7710')
        .get('/user')
        .then((res) => {
            expect(res).to.have.status(404);
            done()
        })
        .catch((err) => {
            throw err
        })
    })
    it('should return 200 for addUser',(done) => {
        chai.request('http://127.0.0.1:7710')
        .post('/addUser')
        .send({"name":"Testing Aug","isActive":true})
        .then((res) => {
            expect(res).to.have.status(202);
            done()
        })
        .catch((err) => {
            throw err
        })
    })
})