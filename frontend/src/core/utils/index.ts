import dayjs from 'dayjs';
import { Employee } from '../models/Employee';

export function getTotalMonthDuration(from: string, to: string) {
  return (dayjs(to).unix() - dayjs(from).unix()) / (60 * 60 * 24 * 30 * 12);
}

export function getEmployeeYearExperience(employee: Employee) {
  let from = '';
  let to = '';

  employee.positions.forEach(({ toolLanguages }) => {
    toolLanguages.forEach((eTl) => {
      if (!from) {
        from = eTl.from;
      } else {
        from = dayjs(eTl.from).isBefore(dayjs(from)) ? eTl.from : from;
      }

      if (!to) {
        to = eTl.to;
      } else {
        to = dayjs(eTl.to).isAfter(dayjs(to)) ? eTl.to : to;
      }
    });
  });

  return getTotalMonthDuration(from, to);
}
