import { useDispatch, useSelector } from "react-redux";
import GlobalQuizzes from "../../GLOBAL/GlobalQuizzes/GlobalQuizzes";
import Cmp211Questions from "../Cmp211Questions/Cmp211Questions";
import {
  moveToNextQuestionAction,
  moveToPreviousQuestionAction,
} from "../../../REDOX/Features/CMP211SLICE/cmp211slice";

import {
  cmp211pushAnswerAction,
  cmp211resetSeletctAction,
  cmp211SelectActions,
  cmp211UpdatedResultAction,
} from "../../../REDOX/Features/CMP211SLICE/cmp211resulltslice";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Cmp211Quiz() {
  //
  const navigate = useNavigate();
  const location = useLocation();
  const [moved, setMoved] = useState(false);
  //
  const dispatch = useDispatch();

  // trace
  const trace = useSelector((state) => state.cmp211question.trace);
  // result
  const { results } = useSelector((state) => state.cmp211Result);
  // questions
  const question = useSelector((state) => state.cmp211question.queue);
  const select = useSelector((state) => state.cmp211Result.select);
  const { timer } = useSelector((state) => state.timerslice);

  ////////////////////////////////////////////////////////////////////////

  // next
  const handleNextButton = () => {
    if (trace < question.length - 1) {
      dispatch(moveToNextQuestionAction());
      if (results.length <= trace) {
        setMoved(true);
        dispatch(cmp211pushAnswerAction(select));
      }
    }
  };

  // previous
  const handlePreviousButton = () => {
    if (trace > 0) {
      setMoved(false);
      dispatch(moveToPreviousQuestionAction());
    }
  };

  // navigate to result
  const navigateToResult = () => {
    const current = location.pathname;
    const newPath = current.replace("cmp221", "cmp221-result");
    return navigate(newPath, { replace: true, relative: true });
  };
  // finish

  const handleFinishedButton = () => {
    dispatch(cmp211pushAnswerAction(select));
    navigateToResult();
  };

  useEffect(() => {
    if (moved) {
      dispatch(cmp211UpdatedResultAction({ trace, select }));
    }
  }, [trace, select, moved]);

  useEffect(() => {
    if (timer === 0) {
      navigateToResult();
    }
  }, [timer]);

  return (
    <>
      <GlobalQuizzes
        questions={
          <Cmp211Questions
            selected={cmp211SelectActions}
            updated={cmp211UpdatedResultAction}
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

export default Cmp211Quiz;
