import createSagaMiddleware from 'redux-saga';

export const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
  yield console.log('Hello Saga');
}
