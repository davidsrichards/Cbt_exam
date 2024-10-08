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
import { get222Helperfunction } from "../GST222HelperFunction";

function Gst222Results() {
  const [{ apidata, servererror, isloading }] = get222Helperfunction(true);

  const dispatch = useDispatch();
  const { answers } = useSelector((state) => state.gst222question);
  const { results } = useSelector((state) => state.gst222Result);
  // total attempts
  const totalAttempts = checkTotalAttempt(results);
  // total points
  const totalPoints = checkTotalOnpoint(results, answers, 2);

  useEffect(() => {
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
  }, []);

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
        resetAll={resetAllActions}
        to={"/google/login/success/gst222"}
        /*  apidata={apidata}
        index={1} */
        oldPath={"gst222-result"}
        newAPath={"gst222-review"}
      />
    </>
  );
}

export default Gst222Results;
