import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import GlobalQuizzes from "../../GLOBAL/GlobalQuizzes/GlobalQuizzes";
import {
  cmp224moveToNextQuestionAction,
  cmp224moveToPreviousQuestionAction,
} from "../../../REDOX/Features/CMP224/Cmp224QuestionSlice";
import {
  cmp224pushAnswerAction,
  cmp224SelectActions,
  cmp224UpdatedResultAction,
} from "../../../REDOX/Features/CMP224/Cmp224ResultSlice";
import Cmp224Questions from "../Cmp224Questions/Cmp224Questions";

function Cmp224Quiz() {
  //
  const navigate = useNavigate();
  const location = useLocation();
  const [moved, setMoved] = useState(false);

  //
  const dispatch = useDispatch();

  // trace
  const trace = useSelector((state) => state.cmp224question.trace);
  // result
  const { results } = useSelector((state) => state.cmp224Result);
  // questions
  const question = useSelector((state) => state.cmp224question.queue);
  // select
  const select = useSelector((state) => state.cmp224Result.select);
  const { timer } = useSelector((state) => state.timerslice);

  ////////////////////////////////////////////////////////////////////////

  // next
  const handleNextButton = () => {
    if (trace < question.length - 1) {
      dispatch(cmp224moveToNextQuestionAction());
      if (results.length <= trace) {
        setMoved(true);
        dispatch(cmp224pushAnswerAction(select));
      }
    }
  };

  // previous
  const handlePreviousButton = () => {
    if (trace > 0) {
      setMoved(false);
      dispatch(cmp224moveToPreviousQuestionAction());
    }
  };

  // navigate to result

  const navigateToResult = () => {
    const current = location.pathname;
    const newPath = current.replace("cmp224", "cmp224-result");
    return navigate(newPath, { replace: true, relative: true });
  };

  // finish

  const handleFinishedButton = () => {
    dispatch(cmp224pushAnswerAction(select));
    navigateToResult();
  };

  useEffect(() => {
    if (moved) {
      dispatch(cmp224UpdatedResultAction({ trace, select }));
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
          <Cmp224Questions
            selected={cmp224SelectActions}
            updated={cmp224UpdatedResultAction}
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

export default Cmp224Quiz;
