import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useState, useEffect } from "react";
import GlobalQuizzes from "../../../GLOBAL/GlobalQuizzes/GlobalQuizzes";
import {
  gst121moveToNextQuestionAction,
  gst121moveToPreviousQuestionAction,
} from "../../../../REDOX/Features/LEVEL100/GST121/Gst121QuestionsSlice";
import {
  gst121pushAnswerAction,
  gst121SelectActions,
  gst121UpdatedResultAction,
} from "../../../../REDOX/Features/LEVEL100/GST121/Gst121ResultSlice";
import Gst121Questions from "../Gst121Questions/Gst121Questions";

function Gst121Quiz() {
  //
  const navigate = useNavigate();
  const location = useLocation();
  const [moved, setMoved] = useState(false);
  //
  const dispatch = useDispatch();

  // trace
  const trace = useSelector((state) => state.gst121question.trace);
  // result
  const { results } = useSelector((state) => state.gst121Result);
  // questions
  const question = useSelector((state) => state.gst121question.queue);
  // select
  const select = useSelector((state) => state.gst121Result.select);
  const { timer } = useSelector((state) => state.timerslice);

  ////////////////////////////////////////////////////////////////////////

  // next
  const handleNextButton = () => {
    if (trace < question.length - 1) {
      dispatch(gst121moveToNextQuestionAction());
      if (results.length <= trace) {
        setMoved(true);
        dispatch(gst121pushAnswerAction(select));
      }
    }
  };

  // previous
  const handlePreviousButton = () => {
    if (trace > 0) {
      setMoved(false);
      dispatch(gst121moveToPreviousQuestionAction());
    }
  };

  // navigate to result
  const navigateToResult = () => {
    const current = location.pathname;
    const newPath = current.replace("gst121", "gst121-result");
    return navigate(newPath, { replace: true, relative: true });
  };
  // finish

  const handleFinishedButton = () => {
    dispatch(gst121pushAnswerAction(select));
    navigateToResult();
  };

  // print result

  useEffect(() => {
    if (moved) {
      dispatch(gst121UpdatedResultAction({ trace, select }));
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
          <Gst121Questions
            selected={gst121SelectActions}
            updated={gst121UpdatedResultAction}
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

export default Gst121Quiz;
