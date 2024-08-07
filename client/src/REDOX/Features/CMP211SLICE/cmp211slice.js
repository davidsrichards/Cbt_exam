import { createSlice } from "@reduxjs/toolkit";

const cmp211slice = createSlice({
  name: "cmp211",
  initialState: {
    queue: [],
    answers: [],
    trace: 0,
  },
  reducers: {
    startCMP211ExamAction: (state, action) => {
      let { questions, answers } = action.payload;
      return {
        ...state,
        queue: questions,
        answers,
      };
    },
    moveToNextQuestionAction: (state, action) => {
      state.trace += 1;
    },
    moveToPreviousQuestionAction: (state, action) => {
      state.trace -= 1;
    },
    cmp211ResetAllActions: (state, actions) => {
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
  startCMP211ExamAction,
  moveToNextQuestionAction,
  moveToPreviousQuestionAction,
  cmp211ResetAllActions,
} = cmp211slice.actions;
export default cmp211slice.reducer;
