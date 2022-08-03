import { Router } from 'express';

import TeamsController from '../controllers/teams';

const routerTeams = Router();

const teamsController = new TeamsController();

routerTeams.get('/', teamsController.getAll);
routerTeams.get('/:id', teamsController.findId);

export default routerTeams;
