import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import Users from '../database/models/Users';
import { IUser } from '../interfaces/ILogin';
import LoginService from '../service/login';

const SECRET = process.env.JWT_SECRET || 'secret';

export default class LoginController {
  private service;
  constructor() {
    this.service = new LoginService();
  }

  public login = async (req: Request, res: Response) => {
    const user = req.body as IUser;
    const { status, data } = await this.service.find(user);

    return res.status(status).json(data);
  };

  public validate = async (req: Request, res: Response) => {
    const token = req.headers.authorization as string;
    const decode = jwt.verify(token, SECRET) as jwt.JwtPayload;
    const { email } = decode;

    const user = await Users.findOne({ where: { email } });

    if (user) {
      return res.status(200).json({ role: user.role });
    }
  };
}
