import { Includeable } from 'sequelize';
import { excludeCRUDDateAttribute } from '.';
import { Position } from '../models/position.entity';
import { ToolLanguageImage } from '../models/tool-language-image.entity';
import { ToolLanguage } from '../models/tool-language.entity';

export const employeeIncludeAttributes: Includeable[] = [
  {
    model: Position,
    attributes: {
      exclude: excludeCRUDDateAttribute,
    },
    include: [
      {
        model: ToolLanguage,
        attributes: {
          exclude: excludeCRUDDateAttribute,
        },
        include: [
          {
            model: ToolLanguageImage,
            attributes: {
              exclude: excludeCRUDDateAttribute,
            },
          },
        ],
      },
    ],
  },
];
