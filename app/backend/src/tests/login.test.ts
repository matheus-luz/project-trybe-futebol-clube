import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testa a rota /login', () => {

  it('Quando o cliente não enviar as informações do usuário, retorne uma messagem de error e o status 400', async () => {
    const chaiHttpResponse = await chai.request(app)
    .post('/login').send();

    expect(chaiHttpResponse.status).to.be.eq(400);
    expect(chaiHttpResponse.body).to.be.eql({ message: 'All fields must be filled' });
  });


  it('Quando o cliente enviar um email inválido, retorne um status 400 e uma messagem de email inválido', async () => {
    const chaiHttpResponse = await chai.request(app)
    .post('/login').send({ email: 'invalid_email ', password: 'secret_admin' });

    expect(chaiHttpResponse.status).to.be.eq(400);
    expect(chaiHttpResponse.body).to.be.eql({ message: 'email must be a valid email' });
  });
});
