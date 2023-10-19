import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../App'

import SequelizePartners from '../database/models/SequelizePartners';
import { allPartners } from './mocks/partners';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testa rota get de /partners', function () {
  afterEach(() => {
    sinon.restore();
  })

  it('Should return all Partners', async function() {
    sinon.stub(SequelizePartners, 'findAll').resolves(allPartners as any);
    const { status, body } = await chai.request(app).get('/partners');

    expect(status).to.be.equal(200);
    expect(body).to.be.deep.equal(allPartners);
  });

})