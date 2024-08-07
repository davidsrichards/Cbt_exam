import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";

import {
  checkTotalAttempt,
  checkTotalOnpoint,
  GlobalResultHelperFunction,
} from "../../GLOBAL/GlobalHelperFunction/GlobalHelperFunction";
import { cmp223ResetAllActions } from "../../../REDOX/Features/CMP223/Cmp223QuestionSlice";
import { cmp223resetResultAction } from "../../../REDOX/Features/CMP223/Cmp223ResultSlice";
import GlobalResult from "../../GLOBAL/GlobalResult/GlobalResult";

function Cmp223Results() {
  const dispatch = useDispatch();
  const { answers } = useSelector((state) => state.cmp223question);
  const { results } = useSelector((state) => state.cmp223Result);
  // total attempts
  const totalAttempts = checkTotalAttempt(results);
  // total points
  const totalPoints = checkTotalOnpoint(results, answers, 8);

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
          "/cmp223/result"
        );
      } catch (error) {
        return error;
      }
    };
    postResults();
  });

  // reset all

  const resetAllActions = () => {
    dispatch(cmp223ResetAllActions());
    dispatch(cmp223resetResultAction());
  };
  return (
    <>
      <GlobalResult
        onpoint={totalPoints}
        totalAttempt={totalAttempts}
        username={"Dauda"}
        resetAll={resetAllActions}
        to={"/google/login/success/cmp223"}
      />
    </>
  );
}

export default Cmp223Results;
