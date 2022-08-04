import { Request, Response } from 'express';
import MatchesService from '../service/matches';

export default class MatchesController {
  private service;
  constructor() {
    this.service = new MatchesService();
  }

  public getAll = async (_req: Request, res: Response) => {
    const { status, data } = await this.service.getAll();

    return res.status(status).json(data);
  };

  public update = async (req: Request, res: Response) => {
    const { status, data } = await this.service.update(req);

    return res.status(status).json(data);
  };
}
