import { Request, Response } from 'express';
import { IUser } from '../interfaces/ILogin';
import LoginService from '../service/login';

export default class loginController {
  private service;
  constructor() {
    this.service = new LoginService();
  }

  public login = async (req: Request, res: Response) => {
    const user = req.body as IUser;
    const { status, data } = await this.service.find(user);

    return res.status(status).json(data);
  };
}
