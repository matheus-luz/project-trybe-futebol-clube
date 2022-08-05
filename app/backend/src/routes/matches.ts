import { Router } from 'express';
import MatchesValidate from '../middlewares/matches';

import MatchesController from '../controllers/matches';
import Authorization from '../middlewares/authorization';

const routerMatches = Router();

const matchesController = new MatchesController();
const matchesValidate = new MatchesValidate();
const authorization = new Authorization();

routerMatches.get('/', matchesController.getAll);

routerMatches.post(
  '/',
  authorization.validateToken,
  matchesValidate.validations,
  matchesController.create,
);

routerMatches.patch('/:id', matchesController.finishId);
routerMatches.patch('/:id/finish', matchesController.update);

export default routerMatches;
