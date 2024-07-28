import { useDispatch, useSelector } from "react-redux";
import Question from "../Question/Question";
import { moveNextAction } from "../../Hooks/FetchQuestions/FetchQuestions";
import { movePreviousAcion } from "../../Hooks/FetchQuestions/FetchQuestions";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { pushAnswerAction } from "../../../REDOX/Features/ResultSlice/ResultSlice";

function Quiz() {
  // using the useNavigate

  const navigate = useNavigate();
  const location = useLocation();
  /// variables

  const [check, setCheck] = useState(undefined);

  // using dispatch

  const dispatch = useDispatch();

  /// getting the total number of qeuestion.

  const { queue } = useSelector((state) => state.questions);
  const { trace } = useSelector((state) => state.questions);

  //// handle the previous button

  const handlePrevious = () => {
    if (trace > 0) {
      dispatch(movePreviousAcion());
    }
  };

  //// handle the next button

  const handleNextButton = () => {
    if (trace < queue.length - 1) {
      dispatch(moveNextAction());
      if (results.length <= trace) {
        dispatch(pushAnswerAction(check));
      }
    }
    setCheck(undefined);
  };

  //// checking the results

  const { results } = useSelector((state) => state.results);

  /// handle the finished button

  const handleFinishedButton = () => {
    if (results.length <= trace) {
      dispatch(pushAnswerAction(check));
    }
    if (trace) {
      const current = location.pathname;
      const newPath = current.replace("quiz", "result");
      navigate(newPath, { replace: true, relative: true });
    }
  };

  const oncheck = (check) => {
    setCheck(check);
  };

  // checking if user exist

  return (
    <>
      <div className=" w-full h-screen  flex items-center justify-center text-white bg-[url(https://th.bing.com/th/id/R.0dc9ff62b66bfe204e44c365a18e9566?rik=mNjQ5GQImYRFRQ&pid=ImgRaw&r=0)] container mx-auto p-10 rounded-lg overflow-auto">
        <div className="flex items-start gap-4 justify-center flex-col">
          <Question onCheck={oncheck} />
          <div className="gap-4 flex justify-between w-full mt-4">
            {trace > 0 && (
              <button
                className="bg-red-400 w-[9rem] h-12 rounded-lg text-white"
                onClick={handlePrevious}
              >
                Previous
              </button>
            )}
            {trace < queue.length - 1 && (
              <button
                className="bg-blue-400 w-[9rem] h-12 rounded-lg text-white"
                onClick={handleNextButton}
              >
                Next
              </button>
            )}
            {trace === queue.length - 1 && (
              <button
                className=" bg-neutral-400 w-[9rem] h-12 rounded-lg text-white"
                onClick={() => handleFinishedButton()}
              >
                Finished
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Quiz;

/* 
https://th.bing.com/th/id/R.0dc9ff62b66bfe204e44c365a18e9566?rik=mNjQ5GQImYRFRQ&pid=ImgRaw&r=0 */
