import { Router } from 'express';
import { validationUsername, validatePassword } from '../middlewares/user';
import UserController from '../controllers/login';

const router = Router();

const userController = new UserController();

// Cadastrar um novo Usuário
router.post(
  '/login',
  validationUsername,
  validatePassword,
  userController.find,
);

export default router;
