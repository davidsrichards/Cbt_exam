import { createSlice } from "@reduxjs/toolkit";

const gst121ResultSlice = createSlice({
  name: "results",
  initialState: {
    userId: null,
    results: [],
    selected: undefined,
    select: undefined,
    checked: false,
  },
  reducers: {
    gst121pushAnswerAction: (state, action) => {
      state.results.push(action.payload);
    },

    gst121resetResultAction: (state, action) => {
      return {
        results: [],
        select: undefined,
      };
    },

    gst121UpdatedResultAction: (state, action) => {
      const { trace, select } = action.payload;
      state.results = state.results.fill(select, trace, trace + 1);
    },
    gst121SelectActions: (state, action) => {
      state.select = action.payload;
    },

    gst121resetSeletctAction: (state, action) => {
      state.select = action.payload;
    },
  },
});

export const {
  gst121pushAnswerAction,
  gst121resetResultAction,
  gst121SelectActions,
  gst121resetSeletctAction,
  gst121UpdatedResultAction,
} = gst121ResultSlice.actions;

export default gst121ResultSlice.reducer;
