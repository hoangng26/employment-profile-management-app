import { Provider } from '@nestjs/common';
import { existsSync } from 'fs';
import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE } from '../constants';
import { Employee } from '../models/employee.entity';
import { PositionResource } from '../models/position-resource.entity';
import { Position } from '../models/position.entity';
import { ToolLanguageResource } from '../models/tool-language-resource.entity';
import { ToolLanguage } from '../models/tool-language.entity';
import { databaseConfig } from './database.config';
import initialDatabase from './initialDatabase';

export const databaseProviders: Provider[] = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      const sequelize = new Sequelize(databaseConfig);
      sequelize.addModels([Employee, PositionResource, ToolLanguageResource, Position, ToolLanguage]);

      // await sequelize.sync({ force: true });
      // initialDatabase();

      await sequelize.sync();
      const isDatabaseExist = existsSync('./src/core/database/database.db');
      if (!isDatabaseExist) {
        initialDatabase();
      }
      return sequelize;
    },
  },
];
