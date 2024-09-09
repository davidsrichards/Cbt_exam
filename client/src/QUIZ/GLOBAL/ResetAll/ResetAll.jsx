import { cmp211resetResultAction } from "../../../REDOX/Features/CMP211SLICE/cmp211resulltslice";
import { cmp211ResetAllActions } from "../../../REDOX/Features/CMP211SLICE/cmp211slice";
import { cmp222ResetAllActions } from "../../../REDOX/Features/CMP222/Cmp222QuestionsSlice";
import { cmp222resetResultAction } from "../../../REDOX/Features/CMP222/Cmp222ResultSlice";
import { cmp223ResetAllActions } from "../../../REDOX/Features/CMP223/Cmp223QuestionSlice";
import { cmp223resetResultAction } from "../../../REDOX/Features/CMP223/Cmp223ResultSlice";
import { cmp224ResetAllActions } from "../../../REDOX/Features/CMP224/Cmp224QuestionSlice";
import { cmp224resetResultAction } from "../../../REDOX/Features/CMP224/Cmp224ResultSlice";
import { cmp225ResetAllActions } from "../../../REDOX/Features/CMP225/Cmp225QuestionSlice";
import { cmp225resetResultAction } from "../../../REDOX/Features/CMP225/Cmp225ResultSlice";
import { gst222ResetAllActions } from "../../../REDOX/Features/GST222/Gst222QuestionSlice";
import { gst222resetResultAction } from "../../../REDOX/Features/GST222/Gst222ResultSlice";
import { gst111ResetAllActions } from "../../../REDOX/Features/LEVEL100/GST111/Gst111QuestionsSlice";
import { gst111resetResultAction } from "../../../REDOX/Features/LEVEL100/GST111/Gst111ResultSlice";
import { gst112ResetAllActions } from "../../../REDOX/Features/LEVEL100/GST112/Gst112QuestionsSlice";
import { gst112resetResultAction } from "../../../REDOX/Features/LEVEL100/GST112/Gst112ResultSlice";
import { gst113ResetAllActions } from "../../../REDOX/Features/LEVEL100/GST113/Gst113QuestionsSlice";
import { gst113resetResultAction } from "../../../REDOX/Features/LEVEL100/GST113/Gst113ResultSlice";
import { gst121ResetAllActions } from "../../../REDOX/Features/LEVEL100/GST121/Gst121QuestionsSlice";
import { gst121resetResultAction } from "../../../REDOX/Features/LEVEL100/GST121/Gst121ResultSlice";
import { esp221ResetAllActions } from "../../../REDOX/Features/Level200/ESP221/Esp221QuestionsSlice";
import { esp221resetResultAction } from "../../../REDOX/Features/Level200/ESP221/Esp221ResultSlice";
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
  dispatch(cmp224ResetAllActions());
  dispatch(cmp224resetResultAction());
  dispatch(gst111ResetAllActions());
  dispatch(gst111resetResultAction());
  dispatch(gst112ResetAllActions());
  dispatch(gst112resetResultAction());
  dispatch(gst113ResetAllActions());
  dispatch(gst113resetResultAction());
  dispatch(gst121ResetAllActions());
  dispatch(gst121resetResultAction());
  dispatch(esp221ResetAllActions());
  dispatch(esp221resetResultAction());

  dispatch(resetTimerAction());
}
