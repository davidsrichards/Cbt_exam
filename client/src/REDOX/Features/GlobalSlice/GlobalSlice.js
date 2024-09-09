import { createSlice } from "@reduxjs/toolkit";
const GlobalSlice = createSlice({
  name: "global",
  initialState: {
    showError: false,
    openFilter: false,
  },
  reducers: {
    handleShowErrorAction: (state, action) => {
      state.showError = action.payload;
    },
  },
});

export const { handleShowErrorAction } = GlobalSlice.actions;
export default GlobalSlice.reducer;
