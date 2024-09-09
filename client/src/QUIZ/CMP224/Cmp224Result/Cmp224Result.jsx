import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  checkTotalAttempt,
  checkTotalOnpoint,
  GlobalResultHelperFunction,
} from "../../GLOBAL/GlobalHelperFunction/GlobalHelperFunction";
import { cmp224Helperfunction } from "../Cmp224HelperFunction";
import { cmp224ResetAllActions } from "../../../REDOX/Features/CMP224/Cmp224QuestionSlice";
import { cmp224resetResultAction } from "../../../REDOX/Features/CMP224/Cmp224ResultSlice";
import GlobalResult from "../../GLOBAL/GlobalResult/GlobalResult";

function Cmp224Results() {
  const [{ apidata, servererror, isloading }] = cmp224Helperfunction(true);

  const dispatch = useDispatch();
  const { answers } = useSelector((state) => state.cmp224question);
  const { results } = useSelector((state) => state.cmp224Result);
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
          "/cmp224/result"
        );
      } catch (error) {
        return error;
      }
    };
    postResults();
  }, []);

  // reset all

  const resetAllActions = () => {
    dispatch(cmp224ResetAllActions());
    dispatch(cmp224resetResultAction());
  };

  return (
    <>
      <GlobalResult
        onpoint={totalPoints}
        totalAttempt={totalAttempts}
        resetAll={resetAllActions}
        to={"/google/login/success/cmp224"}
        /*  apidata={apidata}
        index={1} */
        oldPath={"cmp224-result"}
        newAPath={"cmp224-review"}
      />
    </>
  );
}

export default Cmp224Results;
