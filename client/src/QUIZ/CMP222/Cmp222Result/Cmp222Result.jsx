import { useDispatch, useSelector } from "react-redux";
import GlobalResult from "../../GLOBAL/GlobalResult/GlobalResult";
import {
  checkTotalAttempt,
  checkTotalOnpoint,
  GlobalResultHelperFunction,
} from "../../GLOBAL/GlobalHelperFunction/GlobalHelperFunction";
import { cmp222ResetAllActions } from "../../../REDOX/Features/CMP222/Cmp222QuestionsSlice";
import { cmp222resetResultAction } from "../../../REDOX/Features/CMP222/Cmp222ResultSlice";
import { cmp222Helperfunction } from "../Cmp222HelperFunction";
import { useEffect } from "react";

function Cmp222Results() {
  const [{ apidata, servererror, isloading }] = cmp222Helperfunction(true);
  const { results } = useSelector((state) => state.cmp222Result);

  const dispatch = useDispatch();
  const { answers } = useSelector((state) => state.cmp222question);
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
          "/cmp222/result"
        );
      } catch (error) {
        console.log(error);
      }
    };
    postResults();
  });

  // reset all

  const resetAllActions = () => {
    dispatch(cmp222ResetAllActions());
    dispatch(cmp222resetResultAction());
  };
  return (
    <>
      <GlobalResult
        onpoint={totalPoints}
        totalAttempt={totalAttempts}
        resetAll={resetAllActions}
        to={"/google/login/success/cmp222"}
        oldPath={"cmp222-result"}
        newAPath={"cmp222-review"}
      />
    </>
  );
}

export default Cmp222Results;
