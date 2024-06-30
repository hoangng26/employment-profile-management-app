import { Employee } from '@/core/models/Employee';
import { employeeService } from '@/core/services/EmployeeService';
import { AxiosResponse } from 'axios';
import { call, put } from 'redux-saga/effects';
import { SET_EMPLOYEES } from '../action';

export function* fetchEmployeesSaga() {
  const response: AxiosResponse = yield call(employeeService.getAllEmployees);
  const { data: users } = response;
  const parseUsers: Employee[] = users.map(
    ({ id, name, avatarUrl }: any): Employee => ({
      id,
      name,
      avatarUrl,
    }),
  );

  yield put(SET_EMPLOYEES(parseUsers));
}
