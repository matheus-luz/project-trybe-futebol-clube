import { Application as App } from 'express';
import routerLogin from './login';

const Routes = (app: App) => {
  app.use('/login', (req, res, next) => routerLogin(req, res, next));
};

export default Routes;
