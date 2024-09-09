import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useState, useEffect } from "react";
import {
  esp221moveToNextQuestionAction,
  esp221moveToPreviousQuestionAction,
} from "../../../REDOX/Features/Level200/ESP221/Esp221QuestionsSlice";
import {
  esp221pushAnswerAction,
  esp221SelectActions,
  esp221UpdatedResultAction,
} from "../../../REDOX/Features/Level200/ESP221/Esp221ResultSlice";
import Esp221Questions from "../Esp221Questions/Esp221Questions";
import GlobalQuizzes from "../../GLOBAL/GlobalQuizzes/GlobalQuizzes";

function Esp221Quiz() {
  //
  const navigate = useNavigate();
  const location = useLocation();
  const [moved, setMoved] = useState(false);
  //
  const dispatch = useDispatch();

  // trace
  const trace = useSelector((state) => state.esp221question.trace);
  // result
  const { results } = useSelector((state) => state.esp221Result);
  // questions
  const question = useSelector((state) => state.esp221question.queue);
  // select
  const select = useSelector((state) => state.esp221Result.select);
  const { timer } = useSelector((state) => state.timerslice);

  ////////////////////////////////////////////////////////////////////////

  // next
  const handleNextButton = () => {
    if (trace < question.length - 1) {
      dispatch(esp221moveToNextQuestionAction());
      if (results.length <= trace) {
        setMoved(true);
        dispatch(esp221pushAnswerAction(select));
      }
    }
  };

  // previous
  const handlePreviousButton = () => {
    if (trace > 0) {
      setMoved(false);
      dispatch(esp221moveToPreviousQuestionAction());
    }
  };

  // navigate to result
  const navigateToResult = () => {
    const current = location.pathname;
    const newPath = current.replace("esp221", "esp221-result");
    return navigate(newPath, { replace: true, relative: true });
  };
  // finish

  const handleFinishedButton = () => {
    dispatch(esp221pushAnswerAction(select));
    navigateToResult();
  };

  // print result

  useEffect(() => {
    if (moved) {
      dispatch(esp221UpdatedResultAction({ trace, select }));
    }
  }, [select, trace, moved, results]);
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
          <Esp221Questions
            selected={esp221SelectActions}
            updated={esp221UpdatedResultAction}
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

export default Esp221Quiz;
