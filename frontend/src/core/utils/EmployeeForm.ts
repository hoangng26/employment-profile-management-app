import { EmployeeFormField } from '@/components/EmployeeFormComponent';
import dayjs from 'dayjs';
import { Employee } from '../models/Employee';
import Position from '../models/Position';
import ToolLanguage from '../models/ToolLanguage';

function sortASCFunc(item1: any, item2: any) {
  return item1.displayOrder > item2.displayOrder ? 1 : -1;
}

class EmployeeForm {
  parseEmployeeToFormData(employee: Employee): EmployeeFormField {
    const result = {
      name: employee!.name,
      positions: employee!.positions.sort(sortASCFunc).map((position) => {
        const { positionResourceId: id } = position;
        const toolLanguages = position.toolLanguages.sort(sortASCFunc);
        return {
          id: id,
          toolLanguages: toolLanguages.map((tl) => ({
            id: tl.toolLanguageResourceId,
            from: dayjs(tl.from),
            to: dayjs(tl.to),
            description: tl.description,
          })),
        };
      }),
    };

    return result;
  }

  parseFormDataToCreateEmployee(data: EmployeeFormField): Employee {
    return {
      name: data.name,
      positions: data.positions.map(
        ({ id, toolLanguages }, pIndex): Position => ({
          positionResourceId: id!,
          displayOrder: pIndex + 1,
          toolLanguages: toolLanguages.map(
            ({ id, from, to, description }, tlIndex): ToolLanguage => ({
              toolLanguageResourceId: id!,
              displayOrder: tlIndex + 1,
              description,
              from: from.format(),
              to: to.format(),
            }),
          ),
        }),
      ),
    };
  }

  parseFormDataToUpdateEmployee(data: EmployeeFormField, employee: Employee): Employee {
    const updateEmployee: Employee = {
      id: employee.id,
      name: data.name,
      avatarUrl: employee.avatarUrl,
      positions: data.positions.map(
        ({ id: pId, toolLanguages }, pIndex): Position => ({
          id: employee.positions[pIndex] ? employee.positions[pIndex].id : undefined,
          employeeId: employee.id,
          positionResourceId: pId!,
          displayOrder: pIndex + 1,
          toolLanguages: toolLanguages.map(
            ({ id: tlId, from, to, description }, tlIndex): ToolLanguage => ({
              id:
                employee.positions[pIndex] && employee.positions[pIndex].toolLanguages[tlIndex]
                  ? employee.positions[pIndex].toolLanguages[tlIndex].id
                  : undefined,
              positionId: employee.positions[pIndex] ? employee.positions[pIndex].id : undefined,
              toolLanguageResourceId: tlId!,
              displayOrder: tlIndex + 1,
              description,
              from: from.format(),
              to: to.format(),
            }),
          ),
        }),
      ),
    };

    return updateEmployee;
  }
}

export const EF = new EmployeeForm();
