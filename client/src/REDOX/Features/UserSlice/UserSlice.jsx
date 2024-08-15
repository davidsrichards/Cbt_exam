import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "User",
  initialState: {
    username: "",
    googleInformation: [],
  },
  reducers: {
    addUserName: (state, action) => {
      state.username = action.payload;
    },
    resetUsernameAction: (state, action) => {
      state.username = "";
      state.googleInformation = [];
    },

    pushGoogleInformationAction: (state, action) => {
      state.googleInformation = action.payload;
    },
  },
});

export const { addUserName, resetUsernameAction, pushGoogleInformationAction } =
  UserSlice.actions;

export default UserSlice.reducer;
