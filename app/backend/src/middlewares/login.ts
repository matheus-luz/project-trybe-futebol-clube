import { NextFunction, Request, Response } from 'express';

export default class loginValidate {
  private regex = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  private email = (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body;
    if (!this.regex(email)) {
      return res.status(400)
        .json({ message: '"email" must be a valid email' });
    }

    next();
  };

  private password = (req: Request, res: Response, next: NextFunction) => {
    const { password } = req.body;

    if (password.length < 6) {
      return res.status(422).json({ error: 'Password must be longer than 6 characters' });
    }

    next();
  };

  public validations = (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    if (!email && !password) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }

    this.email(req, res, next);
    this.password(req, res, next);
  };
}
