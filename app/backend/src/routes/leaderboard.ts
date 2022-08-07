import { Router } from 'express';
import LeaderboardController from '../controllers/leaderboard';

const routerLeaderboard = Router();
const leaderboard = new LeaderboardController();

routerLeaderboard.get(
  '/home',
  leaderboard.getEveryTeamHome,
);

routerLeaderboard.get(
  '/away',
  leaderboard.getEveryTeamHome,
);

export default routerLeaderboard;
