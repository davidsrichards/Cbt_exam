import { createSlice } from "@reduxjs/toolkit";

const cmp225ResultSlice = createSlice({
  name: "results",
  initialState: {
    userId: null,
    results: [],
    selected: undefined,
    select: undefined,
    checked: false,
  },
  reducers: {
    cmp225pushAnswerAction: (state, action) => {
      state.results.push(action.payload);
    },

    cmp225resetResultAction: (state, action) => {
      return {
        results: [],
        select: undefined,
      };
    },

    cmp225UpdatedResultAction: (state, action) => {
      const { trace, select } = action.payload;
      state.results = state.results.fill(select, trace, trace + 1);
    },
    cmp225SelectActions: (state, action) => {
      state.select = action.payload;
    },

    cmp225resetSeletctAction: (state, action) => {
      state.select = action.payload;
    },
  },
});

export const {
  cmp225pushAnswerAction,
  cmp225resetResultAction,
  cmp225SelectActions,
  cmp225resetSeletctAction,
  cmp225UpdatedResultAction,
} = cmp225ResultSlice.actions;

export default cmp225ResultSlice.reducer;

/* const newResult = [...state.results];
      newResult[trace] = select;
      return { ...state, results: newResult }; */
