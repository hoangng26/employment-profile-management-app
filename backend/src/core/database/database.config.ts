import { SequelizeOptions } from 'sequelize-typescript';

export const databaseConfig: SequelizeOptions = {
  dialect: 'sqlite',
  storage: './database.db',
};
