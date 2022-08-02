import { Router } from 'express';
import LoginValidate from '../middlewares/login';
import Authorization from '../middlewares/authorization';
import LoginController from '../controllers/login';

const routerLogin = Router();

const userController = new LoginController();
const userValidate = new LoginValidate();
const authorization = new Authorization();

routerLogin.post(
  '/',
  userValidate.validations,
  userController.login,
);

routerLogin.get(
  '/',
  authorization.validateToken,
);

export default routerLogin;
