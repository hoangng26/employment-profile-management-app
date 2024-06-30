import createSagaMiddleware from 'redux-saga';
import { all, takeLeading } from 'redux-saga/effects';
import { FETCH_EMPLOYEES } from '../action';
import { fetchEmployeesSaga } from './action';

export const sagaMiddleware = createSagaMiddleware();

export function* employeesSaga() {
  yield takeLeading(FETCH_EMPLOYEES, fetchEmployeesSaga);
}

export function* helloSaga() {
  yield console.log('Hello Saga');
}

export function* rootSaga() {
  yield all([helloSaga(), employeesSaga()]);
}
