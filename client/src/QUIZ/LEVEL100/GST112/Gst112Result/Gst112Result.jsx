import { useDispatch, useSelector } from "react-redux";
import { level100Helperfunction } from "../../Level100HelperFunction/Level100HelperFunction";
import {
  checkTotalAttempt,
  checkTotalOnpoint,
  GlobalResultHelperFunction,
} from "../../../GLOBAL/GlobalHelperFunction/GlobalHelperFunction";
import {
  gst112ResetAllActions,
  gst112StartExamAction,
} from "../../../../REDOX/Features/LEVEL100/GST112/Gst112QuestionsSlice";
import { gst112resetResultAction } from "../../../../REDOX/Features/LEVEL100/GST112/Gst112ResultSlice";
import GlobalResult from "../../../GLOBAL/GlobalResult/GlobalResult";
import { useEffect } from "react";

function Gst112Results() {
  const url = "/api/user/gst112";
  const dispatch = useDispatch();
  const [{ apidata, servererror, isloading }] = level100Helperfunction(
    true,
    url,
    dispatch,
    gst112StartExamAction
  );
  const { results } = useSelector((state) => state.gst112Result);

  const { answers } = useSelector((state) => state.gst112question);
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
          "/gst112/result"
        );
      } catch (error) {
        console.log(error);
      }
    };
    postResults();
  }, []);

  // reset all

  const resetAllActions = () => {
    dispatch(gst112ResetAllActions());
    dispatch(gst112resetResultAction());
  };
  return (
    <>
      <GlobalResult
        onpoint={totalPoints}
        totalAttempt={totalAttempts}
        resetAll={resetAllActions}
        to={"/google/login/success/gst112"}
        oldPath={"gst112-result"}
        newAPath={"gst112-review"}
      />
    </>
  );
}

export default Gst112Results;
