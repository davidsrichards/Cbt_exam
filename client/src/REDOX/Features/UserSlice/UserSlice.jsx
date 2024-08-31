import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "User",
  initialState: {
    username: "",
    userInformation: [],
    googleInformation: [],
    otp: null,
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

    getOtpAction: (state, action) => {
      state.otp = action.payload;
    },
    getUserInformationAction: (state, action) => {
      state.userInformation.push(action.payload);
    },
  },
});

export const {
  addUserName,
  resetUsernameAction,
  pushGoogleInformationAction,
  getOtpAction,
  getUserInformationAction,
} = UserSlice.actions;

export default UserSlice.reducer;
