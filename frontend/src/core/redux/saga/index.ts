import createSagaMiddleware from 'redux-saga';
import { all, takeLeading } from 'redux-saga/effects';
import { FETCH_EMPLOYEES, FETCH_POSITION_RESOURCE } from '../action';
import { fetchEmployeesSaga, fetchPositionResource } from './action';

export const sagaMiddleware = createSagaMiddleware();

export function* employeesSaga() {
  yield takeLeading(FETCH_EMPLOYEES, fetchEmployeesSaga);
}

export function* positionSaga() {
  yield takeLeading(FETCH_POSITION_RESOURCE, fetchPositionResource);
}

export function* helloSaga() {
  yield console.log('Hello Saga');
}

export function* rootSaga() {
  yield all([helloSaga(), employeesSaga(), positionSaga()]);
}
