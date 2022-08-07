import { TLeaderboard } from '../../types/TLeaderboard';
import { TMatch } from '../../types/TMatch';

export default class LeaderboardFunctions {
  public getTotalPoints = (matches: TMatch[], compare: string) => {
    let count = 0;
    if (compare === 'home') {
      matches.forEach((match) => {
        if (match.homeTeamGoals > match.awayTeamGoals) {
          count += 3;
        } if (match.homeTeamGoals === match.awayTeamGoals) {
          count += 1;
        }
      });
    }
    matches.forEach((match) => {
      if (match.homeTeamGoals < match.awayTeamGoals) {
        count += 3;
      } if (match.homeTeamGoals === match.awayTeamGoals) {
        count += 1;
      }
    });
    return count;
  };

  public getTotalGames = (matches: TMatch[]) => matches.length;

  public getTotalVictory = (matches: TMatch[], compare: string) => {
    let count = 0;
    if (compare === 'home') {
      matches.forEach((match) => {
        if (match.homeTeamGoals > match.awayTeamGoals) {
          count += 1;
        }
      });
    }
    matches.forEach((match) => {
      if (match.homeTeamGoals < match.awayTeamGoals) {
        count += 1;
      }
    });
    return count;
  };

  public getTotalDraws = (matches: TMatch[]) => {
    let count = 0;
    matches.forEach((match) => {
      if (match.homeTeamGoals === match.awayTeamGoals) {
        count += 1;
      }
    });

    return count;
  };

  public getTotalLosses = (matches: TMatch[], compare: string) => {
    let count = 0;
    if (compare === 'home') {
      matches.forEach((matc) => {
        if (matc.homeTeamGoals < matc.awayTeamGoals) {
          count += 1;
        }
      });
    }
    matches.forEach((matc) => {
      if (matc.homeTeamGoals > matc.awayTeamGoals) {
        count += 1;
      }
    });
    return count;
  };

  public getGoalsFavor = (matches: TMatch[], compare: string) => {
    let count = 0;
    if (compare === 'home') {
      matches.forEach((match) => {
        count += match.homeTeamGoals;
      });
    }
    matches.forEach((match) => {
      count += match.awayTeamGoals;
    });
    return count;
  };

  public getGoalsOwn = (matches: TMatch[], compare: string) => {
    let count = 0;
    if (compare === 'home') {
      matches.forEach((match) => {
        count += match.awayTeamGoals;
      });
    }
    matches.forEach((match) => {
      count += match.homeTeamGoals;
    });
    return count;
  };

  public getGoalsBalance = (matches: TMatch[], compare: string) => {
    let count = 0;
    if (compare === 'home') {
      matches.forEach((match) => {
        count = match.homeTeamGoals - match.awayTeamGoals;
      });
    }
    matches.forEach((match) => {
      count = match.awayTeamGoals - match.homeTeamGoals;
    });
    return count;
  };

  public getEfficiency = (matches: TMatch[], compare: string) => {
    const games = this.getTotalGames(matches);
    const total = this.getTotalPoints(matches, compare);
    return Number(((total / (games * 3)) * 100).toFixed(2));
  };

  public getOrderTeams = (leader: TLeaderboard[]) => leader.sort((teamA, teamB) =>
    teamB.totalVictories - teamA.totalVictories);
}
