import initialEmployees from '../constants/initialEmployees';
import initialPositionsResources from '../constants/initialPositionResources';
import initialPositions from '../constants/initialPositions';
import initialToolLanguageResources from '../constants/initialToolLanguageResources';
import initialToolLanguages from '../constants/initialToolLanguages';
import { Employee } from '../models/employee.entity';
import { PositionResource } from '../models/position-resource.entity';
import { Position } from '../models/position.entity';
import { ToolLanguageResource } from '../models/tool-language-resource.entity';
import { ToolLanguage } from '../models/tool-language.entity';

export default function initialDatabase() {
  Employee.bulkCreate(initialEmployees);
  PositionResource.bulkCreate(initialPositionsResources);
  ToolLanguageResource.bulkCreate(initialToolLanguageResources);
  Position.bulkCreate(initialPositions);
  ToolLanguage.bulkCreate(initialToolLanguages);
}
