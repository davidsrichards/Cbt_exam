import { cmp211resetResultAction } from "../../../REDOX/Features/CMP211SLICE/cmp211resulltslice";
import { cmp211ResetAllActions } from "../../../REDOX/Features/CMP211SLICE/cmp211slice";
import { cmp222ResetAllActions } from "../../../REDOX/Features/CMP222/Cmp222QuestionsSlice";
import { cmp222resetResultAction } from "../../../REDOX/Features/CMP222/Cmp222ResultSlice";
import { cmp223ResetAllActions } from "../../../REDOX/Features/CMP223/Cmp223QuestionSlice";
import { cmp223resetResultAction } from "../../../REDOX/Features/CMP223/Cmp223ResultSlice";
import { cmp225ResetAllActions } from "../../../REDOX/Features/CMP225/Cmp225QuestionSlice";
import { cmp225resetResultAction } from "../../../REDOX/Features/CMP225/Cmp225ResultSlice";
import { gst222ResetAllActions } from "../../../REDOX/Features/GST222/Gst222QuestionSlice";
import { gst222resetResultAction } from "../../../REDOX/Features/GST222/Gst222ResultSlice";
import {
  resetTimerAction,
  startTimerAction,
} from "../../../REDOX/Features/TimerSlice/TimerSlice";

export function GlobalResetAllActions(dispatch) {
  dispatch(startTimerAction(false));
  dispatch(cmp211resetResultAction());
  dispatch(cmp222resetResultAction());
  dispatch(cmp223resetResultAction());
  dispatch(gst222resetResultAction());
  dispatch(cmp211ResetAllActions());
  dispatch(cmp222ResetAllActions());
  dispatch(cmp223ResetAllActions());
  dispatch(cmp225ResetAllActions());
  dispatch(cmp225resetResultAction());
  dispatch(gst222ResetAllActions());
  dispatch(resetTimerAction());
}
