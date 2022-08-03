import { Router } from 'express';

import TeamsController from '../controllers/teams';

const routerTeams = Router();

const teamsController = new TeamsController();

routerTeams.get(
  '/',
  teamsController.getAll,
);

export default routerTeams;
