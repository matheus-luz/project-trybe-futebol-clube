import * as bcryptjs from 'bcryptjs';
import { IUser } from '../interfaces/ILogin';
import User from '../database/models/Users';

export default class loginService {
  public find = async (user: IUser) => {
    const { email, password } = user;

    const emailUser = await User.findOne({ where: { email } });

    if (!emailUser || await bcryptjs.compare(password, emailUser.password)) {
      return {
        status: 401,
        data: {
          message: 'Incorrect email or password',
        },
      };
    }

    return {
      status: 200,
      data: {
        message: 'Sucess',
      },
    };
  };
}
