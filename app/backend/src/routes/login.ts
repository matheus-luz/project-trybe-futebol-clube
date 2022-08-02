import { Router } from 'express';
import LoginValidate from '../middlewares/login';
import LoginController from '../controllers/login';

const routerLogin = Router();

const userController = new LoginController();
const userValidate = new LoginValidate();

routerLogin.post(
  '/',
  (req, res, next) => userValidate.validations(req, res, next),
  (req, res) => userController.login(req, res),
);

export default routerLogin;
