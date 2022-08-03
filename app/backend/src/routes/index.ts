import { Application as App } from 'express';
import routerLogin from './login';
import routerMatches from './matches';
import routerTeams from './teams';

const Routes = (app: App) => {
  app.use('/login', routerLogin);
  app.use('/teams', routerTeams);
  app.use('/matches', routerMatches);
};

export default Routes;
