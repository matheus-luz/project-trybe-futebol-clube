import { Router } from 'express';
import MatchesValidate from '../middlewares/matches';

import MatchesController from '../controllers/matches';

const routerMatches = Router();

const matchesController = new MatchesController();
const matchesValidate = new MatchesValidate();

routerMatches.get('/', matchesController.getAll);

routerMatches.post('/', matchesValidate.validations, matchesController.create);

routerMatches.patch('/:id/finish', matchesController.update);

export default routerMatches;
