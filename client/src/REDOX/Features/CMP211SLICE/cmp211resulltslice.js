import { createSlice } from "@reduxjs/toolkit";

const cmp211ResultSlice = createSlice({
  name: "results",
  initialState: {
    userId: null,
    results: [],
    selected: undefined,
    select: undefined,
    checked: false,
  },
  reducers: {
    cmp211pushAnswerAction: (state, action) => {
      state.results.push(action.payload);
    },

    cmp211resetResultAction: (state, action) => {
      return {
        results: [],
        select: undefined,
      };
    },

    cmp211UpdatedResultAction: (state, action) => {
      const { trace, select } = action.payload;
      state.results = state.results.fill(select, trace, trace + 1);
    },
    cmp211SelectActions: (state, action) => {
      state.select = action.payload;
    },

    cmp211resetSeletctAction: (state, action) => {
      state.select = action.payload;
    },
  },
});

export const {
  cmp211pushAnswerAction,
  cmp211resetResultAction,
  cmp211UpdatedResultAction,
  cmp211SelectActions,
  cmp211resetSeletctAction,
} = cmp211ResultSlice.actions;

export default cmp211ResultSlice.reducer;
