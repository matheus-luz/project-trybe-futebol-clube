import { Request, Response } from 'express';
import Matches from '../database/models/Matches';
import Teams from '../database/models/Teams';
import LeaderboardService from '../service/leaderboard';

export default class LoginController {
  private service;

  constructor() {
    this.service = new LeaderboardService();
  }

  public getEveryTeamHome = async (req: Request, res: Response) => {
    // const {} = req.baseUrl;
    const allTeams = await Teams.findAll();
    const allMatches = await Matches.findAll();

    const ratingTeams = this.service.getEveryTeam(allTeams, allMatches, 'home');

    return res.status(200).json(ratingTeams);
  };

  public getEveryTeamAway = async (req: Request, res: Response) => {
    // const {} = req.baseUrl;
    const allTeams = await Teams.findAll();
    const allMatches = await Matches.findAll();

    const ratingTeams = this.service.getEveryTeam(allTeams, allMatches, 'away');

    return res.status(200).json(ratingTeams);
  };
}
