import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;

import { teams } from './index';

describe('Testa a rota /teams', () => {

  it('retorna todos os times', async () => {
    const chaiHttpResponse = await chai.request(app)
    .get('/teams').send();

    expect(chaiHttpResponse.status).to.be.eq(200);
    expect(chaiHttpResponse.body).to.be.eql(teams);
  });


  it('retorna apenas o time do id: 1', async () => {
    const chaiHttpResponse = await chai.request(app)
    .get('/teams/1').send();

    expect(chaiHttpResponse.status).to.be.eq(200);
    expect(chaiHttpResponse.body).to.be.eql({
      "id": 1,
      "teamName": "Avaí/Kindermann"
    });
  });
});
