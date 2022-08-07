import { TTeam } from '../../types/TTeam';
import { TLeaderboard } from '../../types/TLeaderboard';

export default class LeaderboardFunctions {
  public awayTotalPoints = (team: TTeam) => {
    let count = 0;
    team.awayMatches.forEach((t) => {
      if (t.homeTeamGoals < t.awayTeamGoals) {
        count += 3;
      } if (t.homeTeamGoals === t.awayTeamGoals) {
        count += 1;
      }
    });
    return count;
  };

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
    if (compare === 'away') {
      return this.awayTotalPoints(team);
    }
    return count;
  };

  public getTotalGames = (team: TTeam, compare: string) => {
    let count = 0;
    if (compare === 'home') {
      count += team.homeMatches.length;
    } if (compare === 'away') {
      count += team.awayMatches.length;
    }
    return count;
  };

  public getTotalVictory = (team: TTeam, compare: string) => {
    let count = 0;
    if (compare === 'home') {
      team.homeMatches.forEach((t) => {
        if (t.homeTeamGoals > t.awayTeamGoals) {
          count += 1;
        }
      });
    } if (compare === 'away') {
      team.awayMatches.forEach((t) => {
        if (t.homeTeamGoals < t.awayTeamGoals) {
          count += 1;
        }
      });
    }
    return count;
  };

  public getTotalDraws = (team: TTeam, compare: string) => {
    let count = 0;
    if (compare === 'home') {
      team.homeMatches.forEach((t) => {
        if (t.homeTeamGoals === t.awayTeamGoals) {
          count += 1;
        }
      });
    } if (compare === 'away') {
      team.awayMatches.forEach((t) => {
        if (t.awayTeamGoals === t.homeTeamGoals) {
          count += 1;
        }
      });
    }
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
    } if (compare === 'away') {
      teams.awayMatches.forEach((team) => {
        if (team.homeTeamGoals > team.awayTeamGoals) {
          count += 1;
        }
      });
    }
    return count;
  };

  public getGoalsFavor = (teams: TTeam, compare: string) => {
    let count = 0;
    if (compare === 'home') {
      teams.homeMatches.forEach((team) => {
        count += team.homeTeamGoals;
      });
    } if (compare === 'away') {
      teams.awayMatches.forEach((team) => {
        count += team.awayTeamGoals;
      });
    }
    return count;
  };

  public getGoalsOwn = (teams: TTeam, compare: string) => {
    let count = 0;
    if (compare === 'home') {
      teams.homeMatches.forEach((team) => {
        count += team.awayTeamGoals;
      });
    } if (compare === 'away') {
      teams.awayMatches.forEach((team) => {
        count += team.homeTeamGoals;
      });
    }
    return count;
  };

  public getGoalsBalance = (teams: TTeam, compare: string) => {
    let count = 0;
    if (compare === 'home') {
      count = this.getGoalsFavor(teams, compare) - this.getGoalsOwn(teams, compare);
    } if (compare === 'away') {
      count = this.getGoalsFavor(teams, compare) - this.getGoalsOwn(teams, compare);
    }
    return count;
  };

  public getEfficiency = (teams: TTeam, compare: string) => {
    const games = this.getTotalGames(teams, compare);
    const total = this.getTotalPoints(teams, compare);
    return Number(((total / (games * 3)) * 100).toFixed(2));
  };

  public getOrderTeams = (leader: TLeaderboard[]) => leader.sort((teamA, teamB) =>
    teamB.totalPoints - teamA.totalPoints || teamB.goalsBalance - teamA.goalsBalance
    || teamB.goalsFavor - teamA.goalsFavor || teamB.goalsOwn - teamA.goalsOwn);
}
