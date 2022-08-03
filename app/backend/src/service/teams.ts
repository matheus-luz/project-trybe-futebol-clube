import Teams from '../database/models/Teams';

export default class TeamService {
  public getAll = async () => {
    const teams = await Teams.findAll();

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
