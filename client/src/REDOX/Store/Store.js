import { combineReducers, configureStore } from "@reduxjs/toolkit";
import QuestionSlice from "../Features/QuestionSlice/QuestionSlice";
import ResultSlice from "../Features/ResultSlice/ResultSlice";
import UserSlice from "../Features/UserSlice/UserSlice";
import AdminQuestionSlice from "../Features/AdminQuestionSlice/AdminQuestionSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cmp211slice from "../Features/CMP211SLICE/cmp211slice";
import cmp211resulltslice from "../Features/CMP211SLICE/cmp211resulltslice";
import Cmp222ResultSlice from "../Features/CMP222/Cmp222ResultSlice";
import Cmp222QuestionsSlice from "../Features/CMP222/Cmp222QuestionsSlice";
import Cmp223QuestionSlice from "../Features/CMP223/Cmp223QuestionSlice";
import Cmp223ResultSlice from "../Features/CMP223/Cmp223ResultSlice";
import Gst222ResultSlice from "../Features/GST222/Gst222ResultSlice";
import Gst222QuestionSlice from "../Features/GST222/Gst222QuestionSlice";
import TimerSlice from "../Features/TimerSlice/TimerSlice";

const persistConfig = {
  version: 1,
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  questions: QuestionSlice,
  results: ResultSlice,
  user: UserSlice,
  adminQuestions: AdminQuestionSlice,
  cmp211question: cmp211slice,
  cmp211Result: cmp211resulltslice,
  cmp222question: Cmp222QuestionsSlice,
  cmp222Result: Cmp222ResultSlice,
  cmp223question: Cmp223QuestionSlice,
  cmp223Result: Cmp223ResultSlice,
  gst222Result: Gst222ResultSlice,
  gst222question: Gst222QuestionSlice,
  timerslice: TimerSlice,
});

// persisted

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getMiddleWare) =>
    getMiddleWare({
      serializableCheck: false,
    }),
});
