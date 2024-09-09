import { createSlice } from "@reduxjs/toolkit";

const Cmp224QuestionSlice = createSlice({
  name: "cmp224",
  initialState: {
    queue: [],
    answers: [],
    trace: 0,
  },
  reducers: {
    cmp224StartExamAction: (state, action) => {
      let { questions, answers } = action.payload;
      return {
        ...state,
        queue: questions,
        answers,
      };
    },
    cmp224moveToNextQuestionAction: (state, action) => {
      state.trace += 1;
    },
    cmp224moveToPreviousQuestionAction: (state, action) => {
      state.trace -= 1;
    },
    cmp224ResetAllActions: (state, actions) => {
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
  cmp224StartExamAction,
  cmp224moveToNextQuestionAction,
  cmp224moveToPreviousQuestionAction,
  cmp224ResetAllActions,
} = Cmp224QuestionSlice.actions;
export default Cmp224QuestionSlice.reducer;
