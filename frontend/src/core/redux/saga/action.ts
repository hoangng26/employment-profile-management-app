import { Employee } from '@/core/models/Employee';
import { employeeService } from '@/core/services/EmployeeService';
import { positionService } from '@/core/services/PositionService';
import { AxiosResponse } from 'axios';
import { call, put } from 'redux-saga/effects';
import { SET_EMPLOYEES, SET_POSITION_RESOURCE } from '../action';

export function* fetchEmployeesSaga() {
  const response: AxiosResponse = yield call(employeeService.getAllEmployees);
  const { data: users } = response;
  const parseUsers: Employee[] = users.map(
    ({ id, name, avatarUrl, positions }: any): Employee => ({
      id,
      name,
      avatarUrl,
      positions,
    }),
  );

  yield put(SET_EMPLOYEES(parseUsers));
}

export function* fetchPositionResource() {
  const response: AxiosResponse = yield call(positionService.getResource);
  const { data } = response;
  yield put(SET_POSITION_RESOURCE(data));
}
