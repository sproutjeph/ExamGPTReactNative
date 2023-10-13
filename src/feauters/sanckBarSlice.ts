import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type sanckBarType = 'success' | 'error';

interface SanckBarState {
  message: string;
  type: sanckBarType;
}

const initialState: SanckBarState = {
  message: '',
  type: 'success',
};
const SanckBarSlice = createSlice({
  name: 'sanckBar',
  initialState,
  reducers: {
    updateSanckBar(
      state,
      {payload}: PayloadAction<{message: string; type: sanckBarType}>,
    ) {
      state.message = payload.message;
      state.type = payload.type;
    },
  },
});

export const {updateSanckBar} = SanckBarSlice.actions;

export default SanckBarSlice.reducer;
