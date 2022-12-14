import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import Users from '../database/models/Users';

const SECRET = process.env.JWT_SECRET || 'secret';

export default class Authorization {
  public validateToken = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization as string;

    if (!token) return res.status(400).json({ error: 'Token not found' });

    try {
      const decode = jwt.verify(token, SECRET) as jwt.JwtPayload;
      const { email } = decode;

      const user = await Users.findOne({ where: { email } });

      if (!user) return res.status(401).json({ message: 'Token must be a valid token' });

      next();
    } catch (err: unknown) {
      if (err instanceof Error && err.name.includes('Token')) {
        return res.status(401).json({ message: 'Token must be a valid token' });
      }
      return next(err);
    }
  };
}
