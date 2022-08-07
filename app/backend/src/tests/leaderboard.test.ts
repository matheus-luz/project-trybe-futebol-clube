import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testa a rota /leaderboard', () => {

  it('busque todas as partidas que foram ganhadas em casa e volte com status 200', async () => {
    const chaiHttpResponse = await chai.request(app)
    .get('/leaderboard/home').send();

    expect(chaiHttpResponse.status).to.be.eq(200);
  });

  it('busque todas as partidas que foram ganhadas em fora de casa e volte com status 200 e volta lider do raking', async () => {
    const chaiHttpResponse = await chai.request(app)
    .patch('/leaderboard/away').send();

    expect(chaiHttpResponse.status).to.be.eq(200);
    expect(chaiHttpResponse.body[0]).to.be.eql({
      name: 'Palmeiras',
      'totalPoints': '6',
      'totalGames': '2',
      'totalVictories': '2',
      'totalDraws': '0',
      'totalLosses': '0',
      'goalsFavor': '7',
      'goalsOwn': '0',
      'goalsBalance': '7',
      'efficiency': '100'
    });
  });
});
