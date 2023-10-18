import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type State = {
  currentQuestion: string;
};

const initialState: State = {
  currentQuestion: '',
};

const askAiSlice = createSlice({
  name: 'askAI',
  initialState,
  reducers: {
    saveCurrentQuestion(state, action: PayloadAction<string>) {
      state.currentQuestion = action.payload;
    },
    clearQuestion(state) {
      state.currentQuestion = '';
    },
  },
});

export const {saveCurrentQuestion, clearQuestion} = askAiSlice.actions;

export default askAiSlice.reducer;
