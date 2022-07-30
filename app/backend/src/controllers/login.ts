import { Request, Response } from 'express';

export default class loginController {
  constructor(private userService) {
  }

  public find = async (req: Request, _res: Response) => {
    const user = req.body;
    await this.userService.find(user);
  };
}
