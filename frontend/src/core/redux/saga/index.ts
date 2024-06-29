import createSagaMiddleware from 'redux-saga';
import { all, takeLeading } from 'redux-saga/effects';
import { FETCH_EMPLOYEES, FETCH_PHOTOS } from '../action';
import { fetchEmployeesSaga, fetchPhotosSaga } from './action';

export const sagaMiddleware = createSagaMiddleware();

export function* employeesSaga() {
  yield takeLeading(FETCH_EMPLOYEES, fetchEmployeesSaga);
  yield takeLeading(FETCH_PHOTOS, fetchPhotosSaga);
}

export function* helloSaga() {
  yield console.log('Hello Saga');
}

export function* rootSaga() {
  yield all([helloSaga(), employeesSaga()]);
}
