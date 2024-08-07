import { useDispatch, useSelector } from "react-redux";
import {
  checkTotalAttempt,
  checkTotalOnpoint,
  GlobalResultHelperFunction,
} from "../../GLOBAL/GlobalHelperFunction/GlobalHelperFunction";
import GlobalResult from "../../GLOBAL/GlobalResult/GlobalResult";
import { useEffect } from "react";
import { cmp211ResetAllActions } from "../../../REDOX/Features/CMP211SLICE/cmp211slice";
import { cmp211resetResultAction } from "../../../REDOX/Features/CMP211SLICE/cmp211resulltslice";

function Cmp211Results() {
  const dispatch = useDispatch();
  const { answers } = useSelector((state) => state.cmp211question);
  const { results } = useSelector((state) => state.cmp211Result);
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
          "/cmp211/result"
        );
      } catch (error) {
        console.log(error);
      }
    };
    postResults();
  });

  // reset all

  const resetAllActions = () => {
    dispatch(cmp211ResetAllActions());
    dispatch(cmp211resetResultAction());
  };
  return (
    <>
      <GlobalResult
        onpoint={totalPoints}
        totalAttempt={totalAttempts}
        username={"Dauda"}
        resetAll={resetAllActions}
        to={"/google/login/success/cmp211"}
      />
    </>
  );
}

export default Cmp211Results;
