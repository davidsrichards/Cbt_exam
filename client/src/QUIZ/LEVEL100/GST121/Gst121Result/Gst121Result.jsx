import { useDispatch, useSelector } from "react-redux";
import { level100Helperfunction } from "../../Level100HelperFunction/Level100HelperFunction";
import {
  checkTotalAttempt,
  checkTotalOnpoint,
  GlobalResultHelperFunction,
} from "../../../GLOBAL/GlobalHelperFunction/GlobalHelperFunction";

import GlobalResult from "../../../GLOBAL/GlobalResult/GlobalResult";
import { useEffect } from "react";
import {
  gst121ResetAllActions,
  gst121StartExamAction,
} from "../../../../REDOX/Features/LEVEL100/GST121/Gst121QuestionsSlice";
import { gst121resetResultAction } from "../../../../REDOX/Features/LEVEL100/GST121/Gst121ResultSlice";

function Gst121Results() {
  const url = "/api/user/gst121";
  const dispatch = useDispatch();
  const [{ apidata, servererror, isloading }] = level100Helperfunction(
    true,
    url,
    dispatch,
    gst121StartExamAction
  );
  const { results } = useSelector((state) => state.gst121Result);

  const { answers } = useSelector((state) => state.gst121question);
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
          "/gst121/result"
        );
      } catch (error) {
        console.log(error);
      }
    };
    postResults();
  }, []);

  // reset all

  const resetAllActions = () => {
    dispatch(gst121ResetAllActions());
    dispatch(gst121resetResultAction());
  };
  return (
    <>
      <GlobalResult
        onpoint={totalPoints}
        totalAttempt={totalAttempts}
        resetAll={resetAllActions}
        to={"/google/login/success/gst121"}
        oldPath={"gst121-result"}
        newAPath={"gst121-review"}
      />
    </>
  );
}

export default Gst121Results;
