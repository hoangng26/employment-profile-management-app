import { EmployeeFormField } from '@/components/EmployeeFormComponent';
import dayjs from 'dayjs';
import { Employee } from '../models/Employee';

export function parseEmployeeToFormData(employee: Employee): EmployeeFormField {
  return {
    name: employee!.name,
    positions: employee!.positions.map((position) => {
      const { positionResourceId: id } = position;
      const toolLanguages = position.toolLanguages.sort((p1, p2) => (p1.displayOrder > p2.displayOrder ? 1 : -1));
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
}
