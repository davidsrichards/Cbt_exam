import { createSlice } from "@reduxjs/toolkit";

const cmp222ResultSlice = createSlice({
  name: "results",
  initialState: {
    userId: null,
    results: [],
    selected: undefined,
    select: undefined,
    checked: false,
  },
  reducers: {
    cmp222pushAnswerAction: (state, action) => {
      state.results.push(action.payload);
    },

    cmp222resetResultAction: (state, action) => {
      return {
        results: [],
        select: undefined,
      };
    },

    cmp222UpdatedResultAction: (state, action) => {
      const { trace, select } = action.payload;
      state.results = state.results.fill(select, trace, trace + 1);
    },
    cmp222SelectActions: (state, action) => {
      state.select = action.payload;
    },

    cmp222resetSeletctAction: (state, action) => {
      state.select = action.payload;
    },
  },
});

export const {
  cmp222pushAnswerAction,
  cmp222resetResultAction,
  cmp222SelectActions,
  cmp222resetSeletctAction,
  cmp222UpdatedResultAction,
} = cmp222ResultSlice.actions;

export default cmp222ResultSlice.reducer;
