import {Action, ThunkAction, configureStore} from '@reduxjs/toolkit';
import sanckbarReducer from '../feauters/sanckbarSlice';

const store = configureStore({
  reducer: {
    sanckbar: sanckbarReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
