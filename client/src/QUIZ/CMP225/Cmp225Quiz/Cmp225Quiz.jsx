import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import GlobalQuizzes from "../../GLOBAL/GlobalQuizzes/GlobalQuizzes";
import {
  cmp225moveToNextQuestionAction,
  cmp225moveToPreviousQuestionAction,
} from "../../../REDOX/Features/CMP225/Cmp225QuestionSlice";

import Cmp225Questions from "../Cmp225Questions/Cmp225Questions";
import {
  cmp225pushAnswerAction,
  cmp225SelectActions,
  cmp225UpdatedResultAction,
} from "../../../REDOX/Features/CMP225/Cmp225ResultSlice";

function Cmp225Quiz() {
  //
  const navigate = useNavigate();
  const location = useLocation();
  const [moved, setMoved] = useState(false);

  //
  const dispatch = useDispatch();

  // trace
  const trace = useSelector((state) => state.cmp225question.trace);
  // result
  const { results } = useSelector((state) => state.cmp225Result);
  // questions
  const question = useSelector((state) => state.cmp225question.queue);
  // select
  const select = useSelector((state) => state.cmp225Result.select);
  const { timer } = useSelector((state) => state.timerslice);

  ////////////////////////////////////////////////////////////////////////

  // next
  const handleNextButton = () => {
    if (trace < question.length - 1) {
      dispatch(cmp225moveToNextQuestionAction());
      if (results.length <= trace) {
        setMoved(true);

        dispatch(cmp225pushAnswerAction(select));
      }
    }
  };

  // previous
  const handlePreviousButton = () => {
    if (trace > 0) {
      setMoved(false);
      dispatch(cmp225moveToPreviousQuestionAction());
    }
  };

  // navigate to result

  const navigateToResult = () => {
    const current = location.pathname;
    const newPath = current.replace("cmp225", "cmp225-result");
    return navigate(newPath, { replace: true, relative: true });
  };

  // finish

  const handleFinishedButton = () => {
    dispatch(cmp225pushAnswerAction(select));
    navigateToResult();
  };

  useEffect(() => {
    if (moved) {
      dispatch(cmp225UpdatedResultAction({ trace, select }));
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
          <Cmp225Questions
            selected={cmp225SelectActions}
            updated={cmp225UpdatedResultAction}
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

export default Cmp225Quiz;
