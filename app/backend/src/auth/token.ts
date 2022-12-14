import * as jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET as string;

const jwtConfig = {
  expiresIn: '7d',
};

type IData = {
  email: string;
  password: string;
};

export default class Token {
  generate = (data: IData) => {
    const token = jwt.sign(data, SECRET, jwtConfig);

    return token;
  };
}
