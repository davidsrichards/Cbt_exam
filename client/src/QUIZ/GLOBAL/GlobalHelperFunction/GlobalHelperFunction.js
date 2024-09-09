import axios from "axios";
import { cmp211ResetAllActions } from "../../../REDOX/Features/CMP211SLICE/cmp211slice";
import { cmp222ResetAllActions } from "../../../REDOX/Features/CMP222/Cmp222QuestionsSlice";
import { cmp223ResetAllActions } from "../../../REDOX/Features/CMP223/Cmp223QuestionSlice";
import { gst222ResetAllActions } from "../../../REDOX/Features/GST222/Gst222QuestionSlice";
import { cmp211resetResultAction } from "../../../REDOX/Features/CMP211SLICE/cmp211resulltslice";
import { cmp222resetResultAction } from "../../../REDOX/Features/CMP222/Cmp222ResultSlice";
import { cmp223resetResultAction } from "../../../REDOX/Features/CMP223/Cmp223ResultSlice";
import { gst222resetResultAction } from "../../../REDOX/Features/GST222/Gst222ResultSlice";
import { cmp225ResetAllActions } from "../../../REDOX/Features/CMP225/Cmp225QuestionSlice";
import { cmp225resetResultAction } from "../../../REDOX/Features/CMP225/Cmp225ResultSlice";
import {
  openQuizAction,
  startTimerAction,
} from "../../../REDOX/Features/TimerSlice/TimerSlice";
import { handleShowErrorAction } from "../../../REDOX/Features/GlobalSlice/GlobalSlice";

//
const BASE_URL = "/api/user";
export async function GlobalResultHelperFunction(credentials, url) {
  try {
    const { data } = await axios.post(`${BASE_URL}${url}`, credentials);
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
}

// check total attempts

export const checkTotalAttempt = (result) => {
  return result.filter((res) => res !== undefined).length;
};

// tottal points

export const checkTotalOnpoint = (result, answer, point) => {
  const totalScore = result
    .map((element, i) => answer[i] === element)
    .filter((i) => i === true)
    .reduce((prev, curr) => prev + curr, 0);
  return totalScore * point;
};

export const startAllActions = (dispatch) => {
  dispatch(startTimerAction(false));
  dispatch(cmp211ResetAllActions());
  dispatch(cmp222ResetAllActions());
  dispatch(cmp223ResetAllActions());
  dispatch(gst222ResetAllActions());
  dispatch(cmp211resetResultAction());
  dispatch(cmp222resetResultAction());
  dispatch(cmp223resetResultAction());
  dispatch(gst222resetResultAction());
  dispatch(cmp225ResetAllActions());
  dispatch(cmp225resetResultAction());
  dispatch(openQuizAction(false));
  dispatch(handleShowErrorAction(false));
};

// reset all actions
