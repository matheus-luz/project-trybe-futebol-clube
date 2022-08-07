import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testa a rota /matches', () => {

  it('atualize uma partida em andamento', async () => {
    const chaiHttpResponse = await chai.request(app)
    .patch('/matches/1').send({
      "homeTeamGoals": 3,
      "awayTeamGoals": 1
    });

    expect(chaiHttpResponse.status).to.be.eq(200);
    expect(chaiHttpResponse.body).to.be.eql({
      "homeTeamGoals": 3,
      "awayTeamGoals": 1
    });
  });


  it('atualizar o status inProgress de uma partida para false', async () => {
    const chaiHttpResponse = await chai.request(app)
    .patch('/matches/2/finish').send();

    expect(chaiHttpResponse.status).to.be.eq(200);
    expect(chaiHttpResponse.body).to.be.eql({
      "message": "Finished"
    });
  });
});
