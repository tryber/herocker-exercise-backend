const supertest = require('supertest');
const app = require('../src/api/app');
const { User } = require('../src/models');

describe('Resposta do endpoint GET /users', function () {
    let response;

    const findAllMock = [{
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'example@example.com',
        createdAt: '2021-10-21T18:02:44.106Z',
        updatedAt: '2021-10-21T18:02:44.106Z',
    }];

    beforeAll(async function () {
        jest.spyOn(User, 'findAll').mockImplementation(() => findAllMock);

        response = await supertest(app)
            .get('/users');
    });

    it('deve retornar um array de objetos idêntico ao usado no Stub', function () {
        expect(response.body).toEqual(findAllMock);
    });
});