import {SnackbarPosition, SnackbarType} from '@components/Snackbar';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface SanckbarState {
  message: string;
  type: SnackbarType;
  position: SnackbarPosition;
  open: boolean;
}

const initialState: SanckbarState = {
  message: '',
  type: SnackbarType.SUCCESS,
  position: SnackbarPosition.TOP,
  open: false,
};
const SanckbarSlice = createSlice({
  name: 'sanckBar',
  initialState,
  reducers: {
    updateSanckBar(
      state,
      {
        payload,
      }: PayloadAction<{
        message: string;
        type: SnackbarType;
        open: boolean;
        position: SnackbarPosition;
      }>,
    ) {
      state.message = payload.message;
      state.type = payload.type;
      state.position = payload.position;
      state.open = payload.open;
    },
  },
});

export const {updateSanckBar} = SanckbarSlice.actions;

export default SanckbarSlice.reducer;
