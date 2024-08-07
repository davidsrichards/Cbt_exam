import { createSlice } from "@reduxjs/toolkit";

const Gst222ResultSlice = createSlice({
  name: "results",
  initialState: {
    userId: null,
    results: [],
    selected: undefined,
    select: undefined,
    checked: false,
  },
  reducers: {
    gst222pushAnswerAction: (state, action) => {
      state.results.push(action.payload);
    },

    gst222resetResultAction: (state, action) => {
      return {
        results: [],
        select: undefined,
      };
    },

    gst222UpdatedResultAction: (state, action) => {
      const { trace, select } = action.payload;
      state.results = state.results.fill(select, trace, trace + 1);
    },
    gst222SelectActions: (state, action) => {
      state.select = action.payload;
    },

    get222resetSeletctAction: (state, action) => {
      state.select = action.payload;
    },
  },
});

export const {
  gst222pushAnswerAction,
  gst222resetResultAction,
  gst222SelectActions,
  get222resetSeletctAction,
  gst222UpdatedResultAction,
} = Gst222ResultSlice.actions;

export default Gst222ResultSlice.reducer;

/* const newResult = [...state.results];
      newResult[trace] = select;
      return { ...state, results: newResult }; */
