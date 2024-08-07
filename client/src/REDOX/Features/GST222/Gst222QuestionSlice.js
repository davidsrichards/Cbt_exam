import { createSlice } from "@reduxjs/toolkit";

const Gst222QuestionSlice = createSlice({
  name: "gst222",
  initialState: {
    queue: [],
    answers: [],
    trace: 0,
  },
  reducers: {
    gst222StartExamAction: (state, action) => {
      let { questions, answers } = action.payload;
      return {
        ...state,
        queue: questions,
        answers,
      };
    },
    gst222moveToNextQuestionAction: (state, action) => {
      state.trace += 1;
    },
    gst222moveToPreviousQuestionAction: (state, action) => {
      state.trace -= 1;
    },
    gst222ResetAllActions: (state, actions) => {
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
  gst222StartExamAction,
  gst222moveToNextQuestionAction,
  gst222moveToPreviousQuestionAction,
  gst222ResetAllActions,
} = Gst222QuestionSlice.actions;
export default Gst222QuestionSlice.reducer;
