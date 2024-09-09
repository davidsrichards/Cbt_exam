import { createSlice } from "@reduxjs/toolkit";

const TimerSlice = createSlice({
  name: "time",
  initialState: {
    timer: 1800,
    started: false,
    ended: false,
    opened: false,
  },
  reducers: {
    getTimersAction: (state, action) => {
      state.timer -= 1;
    },

    resetTimerAction: (state, action) => {
      state.timer = 1800;
    },
    startTimerAction: (state, action) => {
      state.started = action.payload;
    },
    endTimerAction: (state, action) => {
      state.ended = false;
    },
    openQuizAction: (state, action) => {
      state.opened = action.payload;
    },
  },
});

export const {
  getTimersAction,
  startTimerAction,
  endTimerAction,
  resetTimerAction,
  openQuizAction,
} = TimerSlice.actions;
export default TimerSlice.reducer;
