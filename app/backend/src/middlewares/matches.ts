import { NextFunction, Request, Response } from 'express';
import Teams from '../database/models/Teams';

export default class MatchesValidate {
  public validations = async (req: Request, res: Response, next: NextFunction) => {
    const { homeTeam, awayTeam } = req.body;

    if (homeTeam === awayTeam) {
      return res.status(401).json(
        { message: 'It is not possible to create a match with two equal teams' },
      );
    }

    const homeTeamExist = await Teams.findOne({ where: { id: homeTeam } });
    const awayTeamExist = await Teams.findOne({ where: { id: awayTeam } });

    if (!homeTeamExist || !awayTeamExist) {
      return res.status(404).json(
        { message: 'There is no team with such id!' },
      );
    }

    next();
  };
}
