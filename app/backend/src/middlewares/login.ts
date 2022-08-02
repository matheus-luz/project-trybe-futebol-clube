import { NextFunction, Request, Response } from 'express';

export default class LoginValidate {
  private findValidations = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  public validations = (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }

    // const [valid, messege] = this.findValidations(email, password);

    if (!this.findValidations(email)) {
      return res.status(400).json({ message: 'email must be a valid email' });
    }
    if (password.length < 6) {
      return res.status(400).json({ message: 'Password must be longer than 6 characters' });
    }

    next();
  };
}
