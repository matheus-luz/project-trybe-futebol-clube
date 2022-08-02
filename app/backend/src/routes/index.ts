import { Application as App } from 'express';
import routerLogin from './login';

const Routes = (app: App) => {
  app.use('/login', routerLogin);
  app.use('/login/validate', routerLogin);
};

export default Routes;
