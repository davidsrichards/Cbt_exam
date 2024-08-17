import { createSlice } from "@reduxjs/toolkit";

const Cmp225QuestionSlice = createSlice({
  name: "cmp225",
  initialState: {
    queue: [],
    answers: [],
    trace: 0,
  },
  reducers: {
    cmp225StartExamAction: (state, action) => {
      let { questions, answers } = action.payload;
      return {
        ...state,
        queue: questions,
        answers,
      };
    },
    cmp225moveToNextQuestionAction: (state, action) => {
      state.trace += 1;
    },
    cmp225moveToPreviousQuestionAction: (state, action) => {
      state.trace -= 1;
    },
    cmp225ResetAllActions: (state, actions) => {
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
  cmp225StartExamAction,
  cmp225moveToNextQuestionAction,
  cmp225moveToPreviousQuestionAction,
  cmp225ResetAllActions,
} = Cmp225QuestionSlice.actions;
export default Cmp225QuestionSlice.reducer;
