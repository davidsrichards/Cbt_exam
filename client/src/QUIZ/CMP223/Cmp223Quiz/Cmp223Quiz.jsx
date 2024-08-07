import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  cmp223moveToNextQuestionAction,
  cmp223moveToPreviousQuestionAction,
} from "../../../REDOX/Features/CMP223/Cmp223QuestionSlice";
import {
  cmp223pushAnswerAction,
  cmp223SelectActions,
  cmp223UpdatedResultAction,
} from "../../../REDOX/Features/CMP223/Cmp223ResultSlice";
import GlobalQuizzes from "../../GLOBAL/GlobalQuizzes/GlobalQuizzes";
import Cmp223Questions from "../Cmp223Questions/Cmp223Questions";
import { startTimerAction } from "../../../REDOX/Features/TimerSlice/TimerSlice";

function Cmp223Quiz() {
  //
  const navigate = useNavigate();
  const location = useLocation();
  const [moved, setMoved] = useState(false);

  //
  const dispatch = useDispatch();

  // trace
  const trace = useSelector((state) => state.cmp223question.trace);
  // result
  const { results } = useSelector((state) => state.cmp223Result);
  // questions
  const question = useSelector((state) => state.cmp223question.queue);
  // select
  const select = useSelector((state) => state.cmp223Result.select);
  const { timer } = useSelector((state) => state.timerslice);

  ////////////////////////////////////////////////////////////////////////

  // next
  const handleNextButton = () => {
    if (trace < question.length - 1) {
      dispatch(cmp223moveToNextQuestionAction());
      if (results.length <= trace) {
        setMoved(true);

        dispatch(cmp223pushAnswerAction(select));
      }
    }
  };

  // previous
  const handlePreviousButton = () => {
    if (trace > 0) {
      setMoved(false);
      dispatch(cmp223moveToPreviousQuestionAction());
    }
  };

  // navigate to result

  const navigateToResult = () => {
    const current = location.pathname;
    const newPath = current.replace("cmp223", "cmp223-result");
    return navigate(newPath, { replace: true, relative: true });
  };

  // finish

  const handleFinishedButton = () => {
    dispatch(cmp223pushAnswerAction(select));
    navigateToResult();
  };

  useEffect(() => {
    if (moved) {
      dispatch(cmp223UpdatedResultAction({ trace, select }));
    }
  }, [trace, select, moved]);

  // if time up

  useEffect(() => {
    if (timer === 0) {
      navigateToResult();
    }
  }, [timer]);

  return (
    <>
      <GlobalQuizzes
        questions={
          <Cmp223Questions
            selected={cmp223SelectActions}
            updated={cmp223UpdatedResultAction}
            select={select}
          />
        }
        handleNextButton={handleNextButton}
        handlePreviousButton={handlePreviousButton}
        handleFinishedButton={handleFinishedButton}
        question={question}
        trace={trace}
      />
    </>
  );
}

export default Cmp223Quiz;
