import { configureStore, Tuple } from '@reduxjs/toolkit';
import { appReducer } from './reducer';
import { rootSaga, sagaMiddleware } from './saga';

const store = configureStore({
  reducer: {
    app: appReducer,
  },
  middleware: (getDefaultMiddleware) =>
    [
      ...getDefaultMiddleware({
        thunk: false,
      }),
      sagaMiddleware,
    ] as unknown as Tuple,
});
sagaMiddleware.run(rootSaga);

export default store;
