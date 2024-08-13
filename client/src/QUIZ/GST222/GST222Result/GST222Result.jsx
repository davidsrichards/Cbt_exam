import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";

import {
  checkTotalAttempt,
  checkTotalOnpoint,
  GlobalResultHelperFunction,
} from "../../GLOBAL/GlobalHelperFunction/GlobalHelperFunction";
import { gst222ResetAllActions } from "../../../REDOX/Features/GST222/Gst222QuestionSlice";
import { gst222resetResultAction } from "../../../REDOX/Features/GST222/Gst222ResultSlice";
import GlobalResult from "../../GLOBAL/GlobalResult/GlobalResult";

function Gst222Results() {
  const dispatch = useDispatch();
  const { answers } = useSelector((state) => state.gst222question);
  const { results } = useSelector((state) => state.gst222Result);
  // total attempts
  const totalAttempts = checkTotalAttempt(results);
  // total points
  const totalPoints = checkTotalOnpoint(results, answers, 2);

  useSelector(() => {
    const postResults = async () => {
      try {
        const reponse = await GlobalResultHelperFunction(
          {
            results: results,
            attempt: totalAttempts,
            point: totalPoints,
            achieved: totalPoints <= 40 ? "Failed" : "Passed",
          },
          "/gst222/result"
        );
      } catch (error) {
        return error;
      }
    };
    postResults();
  });

  // reset all

  const resetAllActions = () => {
    dispatch(gst222ResetAllActions());
    dispatch(gst222resetResultAction());
  };
  return (
    <>
      <GlobalResult
        onpoint={totalPoints}
        totalAttempt={totalAttempts}
        username={"Dauda"}
        resetAll={resetAllActions}
        to={"/google/login/success/gst222"}
      />
    </>
  );
}

export default Gst222Results;
