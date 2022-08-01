import { Router } from 'express';
import LoginValidate from '../middlewares/login';
import LoginController from '../controllers/login';

const routerLogin = Router();

const userController = new LoginController();
const userValidate = new LoginValidate();

routerLogin.post(
  '/',
  userValidate.validations,
  userController.login,
);

export default routerLogin;
