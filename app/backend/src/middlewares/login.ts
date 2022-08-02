import { NextFunction, Request, Response } from 'express';

export default class LoginValidate {
  private findValidations = (email: string, password: string) => {
    const re = /\S+@\S+\.\S+/;

    if (!re.test(email)) {
      return [false, '"email" must be a valid email'];
    }
    if (password.length < 6) {
      return [false, 'Password must be longer than 6 characters'];
    }

    return [true];
  };

  public validations = (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    if (!email && !password) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }

    const [valid, messege] = this.findValidations(email, password);

    if (!valid) return messege;

    next();
  };
}
