import { combineReducers, configureStore } from "@reduxjs/toolkit";
import QuestionSlice from "../Features/QuestionSlice/QuestionSlice";
import ResultSlice from "../Features/ResultSlice/ResultSlice";
import UserSlice from "../Features/UserSlice/UserSlice";
import AdminQuestionSlice from "../Features/AdminQuestionSlice/AdminQuestionSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

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
});

const persistedConfig = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedConfig,
  middleware: (getMiddleware) =>
    getMiddleware({
      serializableCheck: false,
    }),
});
