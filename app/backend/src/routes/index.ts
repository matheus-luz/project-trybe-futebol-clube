import { Application as App } from 'express';
import routerLogin from './login';

const Routes = (app: App) => {
  app.use('/login', routerLogin);
};

export default Routes;
