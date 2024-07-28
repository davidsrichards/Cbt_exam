import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "User",
  initialState: {
    username: "",
  },
  reducers: {
    addUserName: (state, action) => {
      state.username = action.payload;
    },
    resetUsernameAction: (state, action) => {
      state.username = "";
    },
  },
});

export const { addUserName, resetUsernameAction } = UserSlice.actions;

export default UserSlice.reducer;
