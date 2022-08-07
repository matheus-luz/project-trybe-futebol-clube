import Matches from '../database/models/Matches';
import Teams from '../database/models/Teams';

export default class TeamService {
  public getAll = async () => {
    const teams = await Teams.findAll({
      include: [{ model: Matches, as: 'homeMatches' },
        { model: Matches, as: 'awayMatches' },
      ],
      attributes: { exclude: ['id', 'inProgress'] },
    });

    return {
      status: 200,
      data: {
        teams,
      },
    };
  };

  public findId = async (id: string) => {
    const team = await Teams.findOne({ where: { id } });

    return {
      status: 200,
      data: {
        team,
      },
    };
  };
}
