import { Request, Response } from 'express';
import TeamsService from '../service/teams';

export default class TeamsController {
  private service;
  constructor() {
    this.service = new TeamsService();
  }

  public getAll = async (req: Request, res: Response) => {
    const { status, data } = await this.service.getAll();

    return res.status(status).json(data.teams);
  };
}
