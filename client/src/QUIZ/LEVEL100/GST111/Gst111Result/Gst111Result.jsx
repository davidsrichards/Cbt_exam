import { useDispatch, useSelector } from "react-redux";
import { level100Helperfunction } from "../../Level100HelperFunction/Level100HelperFunction";
import {
  gst111ResetAllActions,
  gst111StartExamAction,
} from "../../../../REDOX/Features/LEVEL100/GST111/Gst111QuestionsSlice";
import {
  checkTotalAttempt,
  checkTotalOnpoint,
  GlobalResultHelperFunction,
} from "../../../GLOBAL/GlobalHelperFunction/GlobalHelperFunction";
import { gst111resetResultAction } from "../../../../REDOX/Features/LEVEL100/GST111/Gst111ResultSlice";
import GlobalResult from "../../../GLOBAL/GlobalResult/GlobalResult";
import { useEffect } from "react";

function Gst111Results() {
  const url = "/api/user/gst111";
  const dispatch = useDispatch();
  const [{ apidata, servererror, isloading }] = level100Helperfunction(
    true,
    url,
    dispatch,
    gst111StartExamAction
  );
  const { results } = useSelector((state) => state.gst111Result);

  const { answers } = useSelector((state) => state.gst111question);
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
          "/gst111/result"
        );
      } catch (error) {
        console.log(error);
      }
    };
    postResults();
  }, []);

  // reset all

  const resetAllActions = () => {
    dispatch(gst111ResetAllActions());
    dispatch(gst111resetResultAction());
  };
  return (
    <>
      <GlobalResult
        onpoint={totalPoints}
        totalAttempt={totalAttempts}
        resetAll={resetAllActions}
        to={"/google/login/success/gst111"}
        oldPath={"gst111-result"}
        newAPath={"gst111-review"}
      />
    </>
  );
}

export default Gst111Results;
