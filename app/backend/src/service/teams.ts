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
}
