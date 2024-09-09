import { createSlice } from "@reduxjs/toolkit";

const gst111ResultSlice = createSlice({
  name: "results",
  initialState: {
    userId: null,
    results: [],
    selected: undefined,
    select: undefined,
    checked: false,
  },
  reducers: {
    gst111pushAnswerAction: (state, action) => {
      state.results.push(action.payload);
    },

    gst111resetResultAction: (state, action) => {
      return {
        results: [],
        select: undefined,
      };
    },

    gst111UpdatedResultAction: (state, action) => {
      const { trace, select } = action.payload;
      state.results = state.results.fill(select, trace, trace + 1);
    },
    gst111SelectActions: (state, action) => {
      state.select = action.payload;
    },

    gst111resetSeletctAction: (state, action) => {
      state.select = action.payload;
    },
  },
});

export const {
  gst111pushAnswerAction,
  gst111resetResultAction,
  gst111SelectActions,
  gst111resetSeletctAction,
  gst111UpdatedResultAction,
} = gst111ResultSlice.actions;

export default gst111ResultSlice.reducer;
