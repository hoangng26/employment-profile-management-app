import { Employee } from '@/core/models/Employee';
import { Photo } from '@/core/models/Photo';
import { employeeService } from '@/core/services/EmployeeService';
import { AxiosResponse } from 'axios';
import { call, put } from 'redux-saga/effects';
import { SET_EMPLOYEES, SET_PHOTOS } from '../action';

export function* fetchEmployeesSaga() {
  const response: AxiosResponse = yield call(employeeService.getAllEmployees);
  const { users } = response.data;
  const parseUsers: Employee[] = users.map(
    ({ id, first_name, last_name, profile_picture }: any): Employee => ({
      id,
      name: `${first_name} ${last_name}`,
      avatarUrl: profile_picture,
    }),
  );

  yield put(SET_EMPLOYEES(parseUsers));
}

export function* fetchPhotosSaga() {
  const response: AxiosResponse = yield call(employeeService.getAllPhotos);
  const { photos } = response.data;
  const parsePhotos: Photo[] = photos.map(
    ({ id, title, url, user, description }: any): Photo => ({
      id,
      url,
      title,
      description,
      userId: user,
    }),
  );
  yield put(SET_PHOTOS(parsePhotos));
}
