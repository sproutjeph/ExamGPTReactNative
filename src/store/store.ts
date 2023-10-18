import {Action, ThunkAction, configureStore} from '@reduxjs/toolkit';
import sanckbarReducer from '../feauters/sanckbarSlice';
import askAIReducer from '../feauters/askAISlice';
import authReducer from '../feauters/authSlice';

const store = configureStore({
  reducer: {
    sanckbar: sanckbarReducer,
    auth: authReducer,
    askAI: askAIReducer,
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
