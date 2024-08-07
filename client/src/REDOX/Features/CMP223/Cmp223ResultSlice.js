import { createSlice } from "@reduxjs/toolkit";

const cmp223ResultSlice = createSlice({
  name: "results",
  initialState: {
    userId: null,
    results: [],
    selected: undefined,
    select: undefined,
    checked: false,
  },
  reducers: {
    cmp223pushAnswerAction: (state, action) => {
      state.results.push(action.payload);
    },

    cmp223resetResultAction: (state, action) => {
      return {
        results: [],
        select: undefined,
      };
    },

    cmp223UpdatedResultAction: (state, action) => {
      const { trace, select } = action.payload;
      state.results = state.results.fill(select, trace, trace + 1);
    },
    cmp223SelectActions: (state, action) => {
      state.select = action.payload;
    },

    cmp223resetSeletctAction: (state, action) => {
      state.select = action.payload;
    },
  },
});

export const {
  cmp223pushAnswerAction,
  cmp223resetResultAction,
  cmp223SelectActions,
  cmp223resetSeletctAction,
  cmp223UpdatedResultAction,
} = cmp223ResultSlice.actions;

export default cmp223ResultSlice.reducer;

/* const newResult = [...state.results];
      newResult[trace] = select;
      return { ...state, results: newResult }; */
