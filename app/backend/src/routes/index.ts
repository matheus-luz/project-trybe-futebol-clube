import { Application as App } from 'express';
import routerLeaderboard from './leaderboard';
import routerLogin from './login';
import routerMatches from './matches';
import routerTeams from './teams';

const Routes = (app: App) => {
  app.use('/login', routerLogin);
  app.use('/teams', routerTeams);
  app.use('/matches', routerMatches);
  app.use('/leaderboard', routerLeaderboard);
};

export default Routes;
