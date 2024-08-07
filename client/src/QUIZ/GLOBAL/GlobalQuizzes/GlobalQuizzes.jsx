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
      <div className=" w-full flex items-center justify-center text-white bg-[url(https://th.bing.com/th/id/R.0dc9ff62b66bfe204e44c365a18e9566?rik=mNjQ5GQImYRFRQ&pid=ImgRaw&r=0)] container mx-auto  rounded-lg overflow-auto">
        <div className="flex items-start gap-4 justify-center flex-col p-6">
          {questions}
          <div className="gap-4 flex justify-between w-full mt-4">
            {trace > 0 && (
              <button
                className="bg-red-400 w-[9rem] h-12 rounded-lg text-white"
                onClick={handlePreviousButton}
              >
                Previous
              </button>
            )}
            {/*  */}
            {trace < question?.length - 1 && (
              <button
                className="bg-blue-400 w-[9rem] h-12 rounded-lg text-white"
                onClick={handleNextButton}
              >
                Next
              </button>
            )}
            {trace === question.length - 1 && (
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

export default GlobalQuizzes;
