import Teams from '../database/models/Teams';
import Matches from '../database/models/Matches';

const connectionTable = {
  include:
      [{
        model: Teams,
        as: 'teamHome',
        attributes: { exclude: ['id'] },
      },
      {
        model: Teams,
        as: 'teamAway',
        attributes: { exclude: ['id'] },
      }],
};

export default class Matcheservice {
  public getAll = async () => {
    const matches = await Matches.findAll(connectionTable);

    return {
      status: 200,
      data: matches,
    };
  };

  public update = async (req: any) => {
    const {
      homeTeam,
      awayTeam,
      homeTeamGoals,
      awayTeamGoals } = req.body;

    const { id } = await Matches.create({
      homeTeam,
      awayTeam,
      homeTeamGoals,
      awayTeamGoals,
      inProgress: true,
    });

    const match = await Matches.findOne({ where: { id } });

    return {
      status: 201,
      data: match,
    };
  };
}
