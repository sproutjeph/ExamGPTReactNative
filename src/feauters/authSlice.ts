import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateAuthState(state, {payload}: PayloadAction<boolean>) {
      state.isAuthenticated = payload;
    },
  },
});

export const {updateAuthState} = authSlice.actions;

export default authSlice.reducer;
