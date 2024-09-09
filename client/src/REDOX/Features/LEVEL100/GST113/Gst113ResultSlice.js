import { createSlice } from "@reduxjs/toolkit";

const gst113ResultSlice = createSlice({
  name: "results",
  initialState: {
    userId: null,
    results: [],
    selected: undefined,
    select: undefined,
    checked: false,
  },
  reducers: {
    gst113pushAnswerAction: (state, action) => {
      state.results.push(action.payload);
    },

    gst113resetResultAction: (state, action) => {
      return {
        results: [],
        select: undefined,
      };
    },

    gst113UpdatedResultAction: (state, action) => {
      const { trace, select } = action.payload;
      state.results = state.results.fill(select, trace, trace + 1);
    },
    gst113SelectActions: (state, action) => {
      state.select = action.payload;
    },

    gst113resetSeletctAction: (state, action) => {
      state.select = action.payload;
    },
  },
});

export const {
  gst113pushAnswerAction,
  gst113resetResultAction,
  gst113SelectActions,
  gst113resetSeletctAction,
  gst113UpdatedResultAction,
} = gst113ResultSlice.actions;

export default gst113ResultSlice.reducer;
