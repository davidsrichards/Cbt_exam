import { createSlice } from "@reduxjs/toolkit";

const Gst121QuestionSlice = createSlice({
  name: "gst121",
  initialState: {
    queue: [],
    answers: [],
    trace: 0,
  },
  reducers: {
    gst121StartExamAction: (state, action) => {
      let { questions, answers } = action.payload;
      return {
        ...state,
        queue: questions,
        answers,
      };
    },
    gst121moveToNextQuestionAction: (state, action) => {
      state.trace += 1;
    },
    gst121moveToPreviousQuestionAction: (state, action) => {
      state.trace -= 1;
    },
    gst121ResetAllActions: (state, actions) => {
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
  gst121StartExamAction,
  gst121moveToNextQuestionAction,
  gst121moveToPreviousQuestionAction,
  gst121ResetAllActions,
} = Gst121QuestionSlice.actions;
export default Gst121QuestionSlice.reducer;
