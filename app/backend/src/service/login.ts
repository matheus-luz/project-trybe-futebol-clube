import * as bcryptjs from 'bcryptjs';
import { IUser } from '../interfaces/ILogin';
import User from '../database/models/Users';
import Token from '../auth/token';

export default class LoginService {
  private token;
  constructor() {
    this.token = new Token();
  }

  public find = async (user: IUser) => {
    const { email, password } = user;

    const emailUser = await User.findOne({ where: { email } });

    if (!emailUser || !bcryptjs.compareSync(password, emailUser.password)) {
      return {
        status: 401,
        data: {
          message: 'Incorrect email or password',
        },
      };
    }

    const token = this.token.generate({ email, password });

    return {
      status: 200,
      data: {
        token,
      },
    };
  };
}
