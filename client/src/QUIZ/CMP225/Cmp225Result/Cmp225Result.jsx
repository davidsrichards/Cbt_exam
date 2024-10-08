import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { cmp225ResetAllActions } from "../../../REDOX/Features/CMP225/Cmp225QuestionSlice";

import GlobalResult from "../../GLOBAL/GlobalResult/GlobalResult";
import { cmp225resetResultAction } from "../../../REDOX/Features/CMP225/Cmp225ResultSlice";
import {
  checkTotalAttempt,
  checkTotalOnpoint,
  GlobalResultHelperFunction,
} from "../../GLOBAL/GlobalHelperFunction/GlobalHelperFunction";
import { cmp225Helperfunction } from "../Cmp225HelperFunction";

function Cmp225Results() {
  const [{ apidata, servererror, isloading }] = cmp225Helperfunction(true);

  const dispatch = useDispatch();
  const { answers } = useSelector((state) => state.cmp225question);
  const { results } = useSelector((state) => state.cmp225Result);
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
          "/cmp225/result"
        );
      } catch (error) {
        return error;
      }
    };
    postResults();
  }, []);

  // reset all

  const resetAllActions = () => {
    dispatch(cmp225ResetAllActions());
    dispatch(cmp225resetResultAction());
  };
  return (
    <>
      <GlobalResult
        onpoint={totalPoints}
        totalAttempt={totalAttempts}
        resetAll={resetAllActions}
        to={"/google/login/success/cmp225"}
        /*  apidata={apidata}
        index={1} */
        oldPath={"cmp225-result"}
        newAPath={"cmp225-review"}
      />
    </>
  );
}

export default Cmp225Results;
