import { createSlice } from "@reduxjs/toolkit";

const Cmp222QuestionSlice = createSlice({
  name: "cmp222",
  initialState: {
    queue: [],
    answers: [],
    trace: 0,
  },
  reducers: {
    cmp222StartExamAction: (state, action) => {
      let { questions, answers } = action.payload;
      return {
        ...state,
        queue: questions,
        answers,
      };
    },
    cmp222moveToNextQuestionAction: (state, action) => {
      state.trace += 1;
    },
    cmp222moveToPreviousQuestionAction: (state, action) => {
      state.trace -= 1;
    },
    cmp222ResetAllActions: (state, actions) => {
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
  cmp222StartExamAction,
  cmp222moveToNextQuestionAction,
  cmp222moveToPreviousQuestionAction,
  cmp222ResetAllActions,
} = Cmp222QuestionSlice.actions;
export default Cmp222QuestionSlice.reducer;
