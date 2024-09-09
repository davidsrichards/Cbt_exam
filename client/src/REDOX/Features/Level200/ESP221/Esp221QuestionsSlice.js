import { createSlice } from "@reduxjs/toolkit";

const Esp221QuestionSlice = createSlice({
  name: "esp221",
  initialState: {
    queue: [],
    answers: [],
    trace: 0,
  },
  reducers: {
    esp221StartExamAction: (state, action) => {
      let { questions, answers } = action.payload;
      return {
        ...state,
        queue: questions,
        answers,
      };
    },
    esp221moveToNextQuestionAction: (state, action) => {
      state.trace += 1;
    },
    esp221moveToPreviousQuestionAction: (state, action) => {
      state.trace -= 1;
    },
    esp221ResetAllActions: (state, actions) => {
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
  esp221StartExamAction,
  esp221moveToNextQuestionAction,
  esp221moveToPreviousQuestionAction,
  esp221ResetAllActions,
} = Esp221QuestionSlice.actions;
export default Esp221QuestionSlice.reducer;
