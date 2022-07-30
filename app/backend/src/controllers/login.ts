import { Request, Response } from 'express';
import { IServiceUser } from '../interfaces/IService';

export default class loginController {
  constructor(private userService: IServiceUser) {
  }

  public find = async (req: Request, _res: Response) => {
    const user = req.body;
    await this.userService.find(user);
  };
}
