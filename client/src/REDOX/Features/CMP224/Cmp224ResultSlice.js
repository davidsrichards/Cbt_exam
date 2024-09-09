import { createSlice } from "@reduxjs/toolkit";

const cmp224ResultSlice = createSlice({
  name: "results",
  initialState: {
    userId: null,
    results: [],
    selected: undefined,
    select: undefined,
    checked: false,
  },
  reducers: {
    cmp224pushAnswerAction: (state, action) => {
      state.results.push(action.payload);
    },

    cmp224resetResultAction: (state, action) => {
      return {
        results: [],
        select: undefined,
      };
    },

    cmp224UpdatedResultAction: (state, action) => {
      const { trace, select } = action.payload;
      state.results = state.results.fill(select, trace, trace + 1);
    },
    cmp224SelectActions: (state, action) => {
      state.select = action.payload;
    },

    cmp224resetSeletctAction: (state, action) => {
      state.select = action.payload;
    },
  },
});

export const {
  cmp224pushAnswerAction,
  cmp224resetResultAction,
  cmp224SelectActions,
  cmp224resetSeletctAction,
  cmp224UpdatedResultAction,
} = cmp224ResultSlice.actions;

export default cmp224ResultSlice.reducer;

/* const newResult = [...state.results];
      newResult[trace] = select;
      return { ...state, results: newResult }; */
