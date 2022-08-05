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

  public create = async (req: Request, res: Response) => {
    const { status, data } = await this.service.create(req);

    return res.status(status).json(data);
  };

  public update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { status, data } = await this.service.update(id);

    return res.status(status).json(data);
  };

  public finishId = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    const { status, data } = await this.service.finishId(id, homeTeamGoals, awayTeamGoals);

    return res.status(status).json(data);
  };
}
