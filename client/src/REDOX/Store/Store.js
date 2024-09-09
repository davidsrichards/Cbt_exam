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
import Gst222ResultSlice from "../Features/GST222/Gst222ResultSlice";
import Gst222QuestionSlice from "../Features/GST222/Gst222QuestionSlice";
import TimerSlice from "../Features/TimerSlice/TimerSlice";
import Cmp225QuestionSlice from "../Features/CMP225/Cmp225QuestionSlice";
import Cmp225ResultSlice from "../Features/CMP225/Cmp225ResultSlice";
import Cmp223QuestionSlice from "../Features/CMP223/Cmp223QuestionSlice";
import Cmp223ResultSlice from "../Features/CMP223/Cmp223ResultSlice";
import GlobalSlice from "../Features/GlobalSlice/GlobalSlice";
import Gst111QuestionsSlice from "../Features/LEVEL100/GST111/Gst111QuestionsSlice";
import Gst111ResultSlice from "../Features/LEVEL100/GST111/Gst111ResultSlice";
import Cmp224ResultSlice from "../Features/CMP224/Cmp224ResultSlice";
import Cmp224QuestionSlice from "../Features/CMP224/Cmp224QuestionSlice";
import Gst112QuestionsSlice from "../Features/LEVEL100/GST112/Gst112QuestionsSlice";
import Gst112ResultSlice from "../Features/LEVEL100/GST112/Gst112ResultSlice";
import Gst113QuestionsSlice from "../Features/LEVEL100/GST113/Gst113QuestionsSlice";
import Gst113ResultSlice from "../Features/LEVEL100/GST113/Gst113ResultSlice";
import Gst121QuestionsSlice from "../Features/LEVEL100/GST121/Gst121QuestionsSlice";
import Gst121ResultSlice from "../Features/LEVEL100/GST121/Gst121ResultSlice";
import Esp221ResultSlice from "../Features/Level200/ESP221/Esp221ResultSlice";
import Esp221QuestionsSlice from "../Features/Level200/ESP221/Esp221QuestionsSlice";

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
  cmp225question: Cmp225QuestionSlice,
  cmp225Result: Cmp225ResultSlice,
  gst222Result: Gst222ResultSlice,
  gst222question: Gst222QuestionSlice,
  esp221Result: Esp221ResultSlice,
  esp221question: Esp221QuestionsSlice,
  gst111question: Gst111QuestionsSlice,
  gst111Result: Gst111ResultSlice,
  gst112question: Gst112QuestionsSlice,
  gst112Result: Gst112ResultSlice,
  gst113question: Gst113QuestionsSlice,
  gst113Result: Gst113ResultSlice,
  gst121question: Gst121QuestionsSlice,
  gst121Result: Gst121ResultSlice,
  cmp224Result: Cmp224ResultSlice,
  cmp224question: Cmp224QuestionSlice,
  timerslice: TimerSlice,
  globalslice: GlobalSlice,
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
