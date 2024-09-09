import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { level200Helperfunction } from "../../Level200/Level200HelperFunction/Level200HelperFunction";
import {
  esp221ResetAllActions,
  esp221StartExamAction,
} from "../../../REDOX/Features/Level200/ESP221/Esp221QuestionsSlice";
import {
  checkTotalAttempt,
  checkTotalOnpoint,
  GlobalResultHelperFunction,
} from "../../GLOBAL/GlobalHelperFunction/GlobalHelperFunction";
import { esp221resetResultAction } from "../../../REDOX/Features/Level200/ESP221/Esp221ResultSlice";
import GlobalResult from "../../GLOBAL/GlobalResult/GlobalResult";

function Esp221Results() {
  const url = "/api/user/esp221";
  const dispatch = useDispatch();
  const [{ apidata, servererror, isloading }] = level200Helperfunction(
    true,
    url,
    dispatch,
    esp221StartExamAction
  );
  const { results } = useSelector((state) => state.esp221Result);

  const { answers } = useSelector((state) => state.esp221question);
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
          "/esp221/result"
        );
      } catch (error) {
        console.log(error);
      }
    };
    postResults();
  }, []);

  // reset all

  const resetAllActions = () => {
    dispatch(esp221ResetAllActions());
    dispatch(esp221resetResultAction());
  };
  return (
    <>
      <GlobalResult
        onpoint={totalPoints}
        totalAttempt={totalAttempts}
        resetAll={resetAllActions}
        to={"/google/login/success/esp221"}
        oldPath={"esp221-result"}
        newAPath={"esp221-review"}
      />
    </>
  );
}

export default Esp221Results;
