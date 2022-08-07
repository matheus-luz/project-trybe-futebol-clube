import { Request, Response } from 'express';
import Matches from '../database/models/Matches';
import Teams from '../database/models/Teams';
import LeaderboardService from '../service/leaderboard';

export default class LoginController {
  private service;

  constructor() {
    this.service = new LeaderboardService();
  }

  public getEveryTeamHome = async (_req: Request, res: Response) => {
  // const {} = req.baseUrl;
    const allTeams = await Teams.findAll({
      include: [{ model: Matches, as: 'homeMatches', where: { inProgress: false } },
        { model: Matches, as: 'awayMatches', where: { inProgress: false } },
      ],
      attributes: { exclude: ['id'] },
    });

    const ratingTeams = this.service.getEveryTeam(allTeams, 'home');

    return res.status(200).json(ratingTeams);
  };

  public getEveryTeamAway = async (req: Request, res: Response) => {
    // const {} = req.baseUrl;
    const allTeams = await Teams.findAll({
      include: [{ model: Matches, as: 'homeMatches', where: { inProgress: false } },
        { model: Matches, as: 'awayMatches', where: { inProgress: false } },
      ],
      attributes: { exclude: ['id'] },
    });

    const ratingTeams = this.service.getEveryTeam(allTeams, 'away');

    return res.status(200).json(ratingTeams);
  };
}
