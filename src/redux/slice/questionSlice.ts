import { IQuestion } from '../../types';
import { getQuestions } from '../actions/questionActions';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface QuestionState {
  questions: IQuestion[];
  loading: boolean;
  error: string | null;
}

const initialState: QuestionState = {
  questions: [],
  loading: false,
  error: null,
};

export const fetchQuestions = createAsyncThunk('questions/fetchQuestions', async () => {
  return await getQuestions();
});

const questionSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchQuestions.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.loading = false;
        state.questions = action.payload;
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error fetching questions';
      });
  },
});

export default questionSlice.reducer;