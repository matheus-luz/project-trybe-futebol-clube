import { TTeam } from '../../types/TTeam';
import { TLeaderboard } from '../../types/TLeaderboard';

export default class LeaderboardFunctions {
  public getTotalPoints = (team: TTeam, compare: string) => {
    let count = 0;
    if (compare === 'home') {
      team.homeMatches.forEach((t) => {
        if (t.homeTeamGoals > t.awayTeamGoals) {
          count += 3;
        } if (t.homeTeamGoals === t.awayTeamGoals) {
          count += 1;
        }
      });
    }
    team.awayMatches.forEach((t) => {
      if (t.homeTeamGoals < t.awayTeamGoals) {
        count += 3;
      } if (t.homeTeamGoals === t.awayTeamGoals) {
        count += 1;
      }
    });
    return count;
  };

  public getTotalGames = () => 3;

  public getTotalVictory = (team: TTeam, compare: string) => {
    let count = 0;
    if (compare === 'home') {
      team.homeMatches.forEach((t) => {
        if (t.homeTeamGoals > t.awayTeamGoals) {
          count += 1;
        }
      });
    }
    team.awayMatches.forEach((t) => {
      if (t.homeTeamGoals < t.awayTeamGoals) {
        count += 1;
      }
    });
    return count;
  };

  public getTotalDraws = (team: TTeam) => {
    let count = 0;
    team.homeMatches.forEach((t) => {
      if (t.homeTeamGoals === t.awayTeamGoals) {
        count += 1;
      }
    });
    return count;
  };

  public getTotalLosses = (teams: TTeam, compare: string) => {
    let count = 0;
    if (compare === 'home') {
      teams.homeMatches.forEach((team) => {
        if (team.homeTeamGoals < team.awayTeamGoals) {
          count += 1;
        }
      });
    }
    teams.awayMatches.forEach((team) => {
      if (team.homeTeamGoals > team.awayTeamGoals) {
        count += 1;
      }
    });
    return count;
  };

  public getGoalsFavor = (teams: TTeam, compare: string) => {
    let count = 0;
    if (compare === 'home') {
      teams.homeMatches.forEach((team) => {
        count += team.homeTeamGoals;
      });
    }
    teams.awayMatches.forEach((team) => {
      count += team.awayTeamGoals;
    });
    return count;
  };

  public getGoalsOwn = (teams: TTeam, compare: string) => {
    let count = 0;
    if (compare === 'home') {
      teams.homeMatches.forEach((team) => {
        count += team.awayTeamGoals;
      });
    }
    teams.awayMatches.forEach((team) => {
      count += team.homeTeamGoals;
    });
    return count;
  };

  public getGoalsBalance = (teams: TTeam, compare: string) => {
    let count = 0;
    if (compare === 'home') {
      teams.homeMatches.forEach((team) => {
        count = team.homeTeamGoals - team.awayTeamGoals;
      });
    }
    teams.awayMatches.forEach((team) => {
      count = team.awayTeamGoals - team.homeTeamGoals;
    });
    return count;
  };

  public getEfficiency = (teams: TTeam, compare: string) => {
    // const games = this.getTotalGames(teams);
    const total = this.getTotalPoints(teams, compare);
    return Number(((total / (3 * 3)) * 100).toFixed(2));
  };

  public getOrderTeams = (leader: TLeaderboard[]) => leader.sort((teamA, teamB) =>
    teamB.totalVictories - teamA.totalVictories);
}
