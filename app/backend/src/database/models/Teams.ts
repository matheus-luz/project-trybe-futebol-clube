import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class Teams extends Model {
  public id: number;
  public username: string;
  public role: string;
  public email: string;
  public password: string;
}

Teams.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: STRING,
    allowNull: false,
  },
  role: {
    type: STRING,
    allowNull: false,
  },
  email: {
    type: STRING,
    allowNull: false,
  },
  password: {
    type: STRING,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'Teams',
  timestamps: false,
});

export default Teams;
