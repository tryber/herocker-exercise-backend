const chai = require('chai');
const sinon = require('sinon');
const app = require('../src/api/app');
const { User } = require('../src/models');

const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const { expect } = chai;

describe('Resposta do endpoint GET /users', () => {
    let response;

    const findAllMock = [{
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'example@example.com',
        createdAt: "2021-10-21T18:02:44.106Z",
        updatedAt: "2021-10-21T18:02:44.106Z",
    }]

    before(async () => {
        sinon.stub(User, 'findAll').resolves(findAllMock);

        response = await chai.request(app).get('/users');
    });

    after(async () => {
        User.findAll.restore();
    });

    it('deve retornar um array', () => {
        expect(response.body).to.be.an('array');
    });
    it('deve retornar um array de objetos idêntico ao usado no Stub', () => {
        expect(response.body).to.deep.equal(findAllMock);
    });

})