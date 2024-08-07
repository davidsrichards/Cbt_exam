import { createSlice } from "@reduxjs/toolkit";

const Cmp223QuestionSlice = createSlice({
  name: "cmp223",
  initialState: {
    queue: [],
    answers: [],
    trace: 0,
  },
  reducers: {
    cmp223StartExamAction: (state, action) => {
      let { questions, answers } = action.payload;
      return {
        ...state,
        queue: questions,
        answers,
      };
    },
    cmp223moveToNextQuestionAction: (state, action) => {
      state.trace += 1;
    },
    cmp223moveToPreviousQuestionAction: (state, action) => {
      state.trace -= 1;
    },
    cmp223ResetAllActions: (state, actions) => {
      return {
        queue: [],
        answers: [],
        trace: 0,
      };
    },
  },
});

///

export const {
  cmp223StartExamAction,
  cmp223moveToNextQuestionAction,
  cmp223moveToPreviousQuestionAction,
  cmp223ResetAllActions,
} = Cmp223QuestionSlice.actions;
export default Cmp223QuestionSlice.reducer;
