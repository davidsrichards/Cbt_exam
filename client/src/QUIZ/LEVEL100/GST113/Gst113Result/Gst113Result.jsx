import { useDispatch, useSelector } from "react-redux";
import { level100Helperfunction } from "../../Level100HelperFunction/Level100HelperFunction";
import {
  checkTotalAttempt,
  checkTotalOnpoint,
  GlobalResultHelperFunction,
} from "../../../GLOBAL/GlobalHelperFunction/GlobalHelperFunction";

import GlobalResult from "../../../GLOBAL/GlobalResult/GlobalResult";
import {
  gst113ResetAllActions,
  gst113StartExamAction,
} from "../../../../REDOX/Features/LEVEL100/GST113/Gst113QuestionsSlice";
import { gst113resetResultAction } from "../../../../REDOX/Features/LEVEL100/GST113/Gst113ResultSlice";
import { useEffect } from "react";

function Gst113Results() {
  const url = "/api/user/gst113";
  const dispatch = useDispatch();
  const [{ apidata, servererror, isloading }] = level100Helperfunction(
    true,
    url,
    dispatch,
    gst113StartExamAction
  );
  const { results } = useSelector((state) => state.gst113Result);

  const { answers } = useSelector((state) => state.gst113question);
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
          "/gst113/result"
        );
      } catch (error) {
        console.log(error);
      }
    };
    postResults();
  }, []);

  // reset all

  const resetAllActions = () => {
    dispatch(gst113ResetAllActions());
    dispatch(gst113resetResultAction());
  };
  return (
    <>
      <GlobalResult
        onpoint={totalPoints}
        totalAttempt={totalAttempts}
        resetAll={resetAllActions}
        to={"/google/login/success/gst113"}
        oldPath={"gst113-result"}
        newAPath={"gst113-review"}
      />
    </>
  );
}

export default Gst113Results;
