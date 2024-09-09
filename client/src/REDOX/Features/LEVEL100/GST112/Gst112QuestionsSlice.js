import { createSlice } from "@reduxjs/toolkit";

const Gst112QuestionSlice = createSlice({
  name: "gst112",
  initialState: {
    queue: [],
    answers: [],
    trace: 0,
  },
  reducers: {
    gst112StartExamAction: (state, action) => {
      let { questions, answers } = action.payload;
      return {
        ...state,
        queue: questions,
        answers,
      };
    },
    gst112moveToNextQuestionAction: (state, action) => {
      state.trace += 1;
    },
    gst112moveToPreviousQuestionAction: (state, action) => {
      state.trace -= 1;
    },
    gst112ResetAllActions: (state, actions) => {
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
  gst112StartExamAction,
  gst112moveToNextQuestionAction,
  gst112moveToPreviousQuestionAction,
  gst112ResetAllActions,
} = Gst112QuestionSlice.actions;
export default Gst112QuestionSlice.reducer;
