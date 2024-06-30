import initialEmployees from '../constants/initialEmployees';
import initialPositionsResources from '../constants/initialPositionsResources';
import initialToolLanguageResources from '../constants/initialToolLanguageResources';
import { Employee } from '../models/employee.entity';
import { PositionResource } from '../models/position-resource.entity';
import { ToolLanguageResource } from '../models/tool-language-resource.entity';

export default function initialDatabase() {
  Employee.bulkCreate(initialEmployees);
  PositionResource.bulkCreate(initialPositionsResources);
  ToolLanguageResource.bulkCreate(initialToolLanguageResources);
}
