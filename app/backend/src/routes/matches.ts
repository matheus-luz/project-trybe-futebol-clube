import { Router } from 'express';

import MatchesController from '../controllers/matches';

const routerMatches = Router();

const matchesController = new MatchesController();

routerMatches.get('/', matchesController.getAll);

routerMatches.post('/', matchesController.create);

routerMatches.patch('/:id/finish', matchesController.update);

export default routerMatches;
