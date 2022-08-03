import Matches from '../database/models/Matches';

export default class Matcheservice {
  public getAll = async () => {
    const matches = await Matches.findAll();

    return {
      status: 200,
      data: {
        matches,
      },
    };
  };
}
