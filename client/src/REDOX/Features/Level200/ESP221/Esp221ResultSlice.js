import { createSlice } from "@reduxjs/toolkit";

const Esp221ResultSlice = createSlice({
  name: "results",
  initialState: {
    userId: null,
    results: [],
    selected: undefined,
    select: undefined,
    checked: false,
  },
  reducers: {
    esp221pushAnswerAction: (state, action) => {
      state.results.push(action.payload);
    },

    esp221resetResultAction: (state, action) => {
      return {
        results: [],
        select: undefined,
      };
    },

    esp221UpdatedResultAction: (state, action) => {
      const { trace, select } = action.payload;
      state.results = state.results.fill(select, trace, trace + 1);
    },
    esp221SelectActions: (state, action) => {
      state.select = action.payload;
    },

    esp221resetSeletctAction: (state, action) => {
      state.select = action.payload;
    },
  },
});

export const {
  esp221pushAnswerAction,
  esp221resetResultAction,
  esp221SelectActions,
  esp221resetSeletctAction,
  esp221UpdatedResultAction,
} = Esp221ResultSlice.actions;

export default Esp221ResultSlice.reducer;
