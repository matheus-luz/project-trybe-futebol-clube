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

  public create = async (req: any) => {
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

  public update = async (id: string) => {
    await Matches.update({ inProgress: false }, { where: { id } });

    return {
      status: 200,
      data: { message: 'Finished' },
    };
  };
}
