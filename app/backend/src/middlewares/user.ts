import { NextFunction, Request, Response } from 'express';

const regex = (email: string) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

function validationEmail(req: Request, res: Response, next: NextFunction) {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'email is required' });
  }

  const emailRegex = regex(email);
  if (!emailRegex) {
    return res.status(400)
      .json({ message: '"email" must be a valid email' });
  }

  next();
}

function validatePassword(req: Request, res: Response, next: NextFunction) {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ error: 'Password is required' });
  }

  if (typeof password !== 'string') {
    return res.status(422).json({ error: 'Password must be a string' });
  }

  if (password.length < 6) {
    return res.status(422).json({ error: 'Password must be longer than 6 characters' });
  }

  next();
}

export { validationEmail, validatePassword };
