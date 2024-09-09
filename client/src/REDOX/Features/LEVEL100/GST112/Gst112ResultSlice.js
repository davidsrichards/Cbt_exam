import { createSlice } from "@reduxjs/toolkit";

const gst112ResultSlice = createSlice({
  name: "results",
  initialState: {
    userId: null,
    results: [],
    selected: undefined,
    select: undefined,
    checked: false,
  },
  reducers: {
    gst112pushAnswerAction: (state, action) => {
      state.results.push(action.payload);
    },

    gst112resetResultAction: (state, action) => {
      return {
        results: [],
        select: undefined,
      };
    },

    gst112UpdatedResultAction: (state, action) => {
      const { trace, select } = action.payload;
      state.results = state.results.fill(select, trace, trace + 1);
    },
    gst112SelectActions: (state, action) => {
      state.select = action.payload;
    },

    gst112resetSeletctAction: (state, action) => {
      state.select = action.payload;
    },
  },
});

export const {
  gst112pushAnswerAction,
  gst112resetResultAction,
  gst112SelectActions,
  gst112resetSeletctAction,
  gst112UpdatedResultAction,
} = gst112ResultSlice.actions;

export default gst112ResultSlice.reducer;
