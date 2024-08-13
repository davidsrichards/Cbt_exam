import Cmp222Questions from "../Cmp222Questions/Cmp222Questions";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  cmp222moveToNextQuestionAction,
  cmp222moveToPreviousQuestionAction,
} from "../../../REDOX/Features/CMP222/Cmp222QuestionsSlice";
import {
  cmp222pushAnswerAction,
  cmp222resetSeletctAction,
  cmp222SelectActions,
  cmp222UpdatedResultAction,
} from "../../../REDOX/Features/CMP222/Cmp222ResultSlice";
import GlobalQuizzes from "../../GLOBAL/GlobalQuizzes/GlobalQuizzes";
import { useState, useEffect } from "react";

function Cmp222Quiz() {
  //
  const navigate = useNavigate();
  const location = useLocation();
  const [moved, setMoved] = useState(false);
  //
  const dispatch = useDispatch();

  // trace
  const trace = useSelector((state) => state.cmp222question.trace);
  // result
  const { results } = useSelector((state) => state.cmp222Result);
  // questions
  const question = useSelector((state) => state.cmp222question.queue);
  // select
  const select = useSelector((state) => state.cmp222Result.select);
  const { timer } = useSelector((state) => state.timerslice);

  ////////////////////////////////////////////////////////////////////////

  // next
  const handleNextButton = () => {
    if (trace < question.length - 1) {
      dispatch(cmp222moveToNextQuestionAction());
      if (results.length <= trace) {
        setMoved(true);
        dispatch(cmp222pushAnswerAction(select));
      }
    }
  };

  // previous
  const handlePreviousButton = () => {
    if (trace > 0) {
      setMoved(false);
      dispatch(cmp222moveToPreviousQuestionAction());
    }
  };

  // navigate to result
  const navigateToResult = () => {
    const current = location.pathname;
    const newPath = current.replace("cmp222", "cmp222-result");
    return navigate(newPath, { replace: true, relative: true });
  };
  // finish

  const handleFinishedButton = () => {
    dispatch(cmp222pushAnswerAction(select));
    navigateToResult();
  };

  // print result

  useEffect(() => {
    if (moved) {
      dispatch(cmp222UpdatedResultAction({ trace, select }));
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
          <Cmp222Questions
            selected={cmp222SelectActions}
            updated={cmp222UpdatedResultAction}
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

export default Cmp222Quiz;
