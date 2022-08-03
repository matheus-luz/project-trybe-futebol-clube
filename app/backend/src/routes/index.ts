import { Application as App } from 'express';
import routerLogin from './login';
import routerTeams from './teams';

const Routes = (app: App) => {
  app.use('/login', routerLogin);
  // app.use('/login/validate', routerLogin);
  app.use('/teams', routerTeams);
};

export default Routes;
