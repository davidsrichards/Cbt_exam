import { createSlice } from "@reduxjs/toolkit";

const Gst111QuestionSlice = createSlice({
  name: "gst111",
  initialState: {
    queue: [],
    answers: [],
    trace: 0,
  },
  reducers: {
    gst111StartExamAction: (state, action) => {
      let { questions, answers } = action.payload;
      return {
        ...state,
        queue: questions,
        answers,
      };
    },
    gst111moveToNextQuestionAction: (state, action) => {
      state.trace += 1;
    },
    gst111moveToPreviousQuestionAction: (state, action) => {
      state.trace -= 1;
    },
    gst111ResetAllActions: (state, actions) => {
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
  gst111StartExamAction,
  gst111moveToNextQuestionAction,
  gst111moveToPreviousQuestionAction,
  gst111ResetAllActions,
} = Gst111QuestionSlice.actions;
export default Gst111QuestionSlice.reducer;
