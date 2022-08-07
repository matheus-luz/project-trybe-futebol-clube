import LeaderboardFunctions from '../utils/functions/leaderboard';
import { TMatch } from '../types/TMatch';
import { TTeam } from '../types/TTeam';

export default class LeaderboardService {
  private functions;
  constructor() {
    this.functions = new LeaderboardFunctions();
  }

  private joinTable = (team: TTeam, matches: TMatch[]) =>
    matches.filter((match: TMatch) => match.homeTeam === team.id);

  private boardFormat = (matches: TMatch[], team: TTeam, compare: string) => ({
    name: team.teamName,
    totalPoints: this.functions.getTotalPoints(matches, compare),
    totalGames: this.functions.getTotalGames(matches),
    totalVictories: this.functions.getTotalVictory(matches, compare),
    totalDraws: this.functions.getTotalDraws(matches),
    totalLosses: this.functions.getTotalLosses(matches, compare),
    goalsFavor: this.functions.getGoalsFavor(matches, compare),
    goalsOwn: this.functions.getGoalsOwn(matches, compare),
    goalsBalance: this.functions.getGoalsBalance(matches, compare),
    efficiency: this.functions.getEfficiency(matches, compare),
  });

  public getEveryTeam = (teams: TTeam[], matches: TMatch[], compare: string) => {
    const leader = teams.map((team) => {
      const filtered = this.joinTable(team, matches);
      return this.boardFormat(filtered, team, compare);
    });
    return this.functions.getOrderTeams(leader);
  };
}
