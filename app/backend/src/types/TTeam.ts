export type TTeamsJoin = {
  id: number,
  homeTeam: number,
  homeTeamGoals: number,
  awayTeam: number,
  awayTeamGoals: number,
  inProgress: boolean,
};

export type TTeam = {
  teamName: string;
  homeMatches: TTeamsJoin[],
  awayMatches: TTeamsJoin[],
};
