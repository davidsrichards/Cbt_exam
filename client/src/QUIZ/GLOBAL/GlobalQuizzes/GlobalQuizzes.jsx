import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startTimerAction } from "../../../REDOX/Features/TimerSlice/TimerSlice";

function GlobalQuizzes({
  trace,
  questions,
  question,
  handleNextButton,
  handlePreviousButton,
  handleFinishedButton,
}) {
  const dispatch = useDispatch();
  const { timer } = useSelector((state) => state.timerslice);
  useEffect(() => {
    if (timer > 0) {
      dispatch(startTimerAction(true));
    }
  });

  return (
    <>
      <div className="global-quiz rounded-lg">
        <div className="flex items-start gap-4 justify-center flex-col p-6">
          {questions}
          <div className="gap-4 flex justify-between w-full mt-4">
            {trace > 0 && (
              <button
                className="bg-red-500 ring-1 ring-red-500 hover:text-red-500 hover:bg-transparent w-[9rem] h-12 rounded-lg text-white transition-all duration-500 ease-in-out"
                onClick={handlePreviousButton}
              >
                Previous
              </button>
            )}
            {/*  */}
            {trace < question?.length - 1 && (
              <button
                className="bg-green-500 ring-1 ring-green-500 hover:text-green-500 hover:bg-transparent w-[9rem] h-12 rounded-lg text-white transition-all duration-500 ease-in-out"
                onClick={handleNextButton}
              >
                Next
              </button>
            )}
            {trace === question.length - 1 && (
              <button
                className="bg-gray-500 ring-1 ring-gray-500 hover:bg-transparent w-[9rem] h-12 rounded-lg text-white transition-all duration-500 ease-in-out"
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

export default GlobalQuizzes;
