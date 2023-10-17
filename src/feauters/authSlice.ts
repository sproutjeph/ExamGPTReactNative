import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUser} from '@utils/types';

interface AuthState {
  isAuthenticated: boolean;
  userData: IUser | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  userData: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateAuthState(state, {payload}: PayloadAction<boolean>) {
      state.isAuthenticated = payload;
    },
    updateUser(state, {payload}: PayloadAction<IUser>) {
      state.userData = payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.userData = null;
    },
  },
});

export const {updateAuthState, updateUser, logout} = authSlice.actions;

export default authSlice.reducer;
