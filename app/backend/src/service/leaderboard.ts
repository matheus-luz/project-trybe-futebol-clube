import LeaderboardFunctions from '../utils/functions/leaderboard';
import { TTeam } from '../types/TTeam';

export default class LeaderboardService {
  private functions;
  constructor() {
    this.functions = new LeaderboardFunctions();
  }

  private boardFormat = (team: TTeam, compare: string) => ({
    name: team.teamName,
    totalPoints: this.functions.getTotalPoints(team, compare),
    totalGames: this.functions.getTotalGames(team, compare),
    totalVictories: this.functions.getTotalVictory(team, compare),
    totalDraws: this.functions.getTotalDraws(team, compare),
    totalLosses: this.functions.getTotalLosses(team, compare),
    goalsFavor: this.functions.getGoalsFavor(team, compare),
    goalsOwn: this.functions.getGoalsOwn(team, compare),
    goalsBalance: this.functions.getGoalsBalance(team, compare),
    efficiency: this.functions.getEfficiency(team, compare),
  });

  public getEveryTeam = (teams: Array<any>, compare: string) => {
    const leader = teams.map((team: TTeam) => this.boardFormat(team, compare));
    return this.functions.getOrderTeams(leader);
  };
}
