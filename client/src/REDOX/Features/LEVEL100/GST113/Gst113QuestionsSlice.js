import { createSlice } from "@reduxjs/toolkit";

const Gst113QuestionSlice = createSlice({
  name: "gst113",
  initialState: {
    queue: [],
    answers: [],
    trace: 0,
  },
  reducers: {
    gst113StartExamAction: (state, action) => {
      let { questions, answers } = action.payload;
      return {
        ...state,
        queue: questions,
        answers,
      };
    },
    gst113moveToNextQuestionAction: (state, action) => {
      state.trace += 1;
    },
    gst113moveToPreviousQuestionAction: (state, action) => {
      state.trace -= 1;
    },
    gst113ResetAllActions: (state, actions) => {
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
  gst113StartExamAction,
  gst113moveToNextQuestionAction,
  gst113moveToPreviousQuestionAction,
  gst113ResetAllActions,
} = Gst113QuestionSlice.actions;
export default Gst113QuestionSlice.reducer;
