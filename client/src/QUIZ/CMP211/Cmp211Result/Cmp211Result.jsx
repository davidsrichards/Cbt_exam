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
import { cmp211helperfunction } from "../Cmp211HelperFunction/Cmp211HelperFunction";
import GlobalAnwers from "../../GLOBAL/GlobalAnwers/GlobalAnwers";

function Cmp211Results() {
  const [apidata, servererror, isloading] = cmp211helperfunction(true);

  const dispatch = useDispatch();
  const { answers } = useSelector((state) => state.cmp211question);
  const { results } = useSelector((state) => state.cmp211Result);
  // total attempts
  const totalAttempts = checkTotalAttempt(results);
  // total points
  const totalPoints = checkTotalOnpoint(results, answers, 1.5);

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
          "/cmp221/result"
        );
      } catch (error) {
        console.log(error);
      }
    };
    postResults();
  }, []);

  // reset all

  const resetAllActions = () => {
    dispatch(cmp211ResetAllActions());
    dispatch(cmp211resetResultAction());
  };

  return (
    <div>
      <GlobalResult
        onpoint={totalPoints}
        totalAttempt={totalAttempts}
        resetAll={resetAllActions}
        to={"/google/login/success/cmp221"}
        /*  apidata={apidata.apidata}
        index={1} */
        oldPath={"cmp221-result"}
        newAPath={"cmp221-review"}
      />
    </div>
  );
}

export default Cmp211Results;
