import { Router } from 'express';
import UserController from '../controllers/login';

const router = Router();

const userController = new UserController();

// Cadastrar um novo Usuário
router.post(
  '/login',
  userController.find,
);

export default router;
