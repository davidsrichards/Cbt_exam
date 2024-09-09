import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useState, useEffect } from "react";
import {
  gst111moveToNextQuestionAction,
  gst111moveToPreviousQuestionAction,
} from "../../../../REDOX/Features/LEVEL100/GST111/Gst111QuestionsSlice";
import {
  gst111pushAnswerAction,
  gst111SelectActions,
  gst111UpdatedResultAction,
} from "../../../../REDOX/Features/LEVEL100/GST111/Gst111ResultSlice";
import Gst111Questions from "../Gst111Questions/Gst111Questions";
import GlobalQuizzes from "../../../GLOBAL/GlobalQuizzes/GlobalQuizzes";

function Gst111Quiz() {
  //
  const navigate = useNavigate();
  const location = useLocation();
  const [moved, setMoved] = useState(false);
  //
  const dispatch = useDispatch();

  // trace
  const trace = useSelector((state) => state.gst111question.trace);
  // result
  const { results } = useSelector((state) => state.gst111Result);
  // questions
  const question = useSelector((state) => state.gst111question.queue);
  // select
  const select = useSelector((state) => state.gst111Result.select);
  const { timer } = useSelector((state) => state.timerslice);

  ////////////////////////////////////////////////////////////////////////

  // next
  const handleNextButton = () => {
    if (trace < question.length - 1) {
      dispatch(gst111moveToNextQuestionAction());
      if (results.length <= trace) {
        setMoved(true);
        dispatch(gst111pushAnswerAction(select));
      }
    }
  };

  // previous
  const handlePreviousButton = () => {
    if (trace > 0) {
      setMoved(false);
      dispatch(gst111moveToPreviousQuestionAction());
    }
  };

  // navigate to result
  const navigateToResult = () => {
    const current = location.pathname;
    const newPath = current.replace("gst111", "gst111-result");
    return navigate(newPath, { replace: true, relative: true });
  };
  // finish

  const handleFinishedButton = () => {
    dispatch(gst111pushAnswerAction(select));
    navigateToResult();
  };

  // print result

  useEffect(() => {
    if (moved) {
      dispatch(gst111UpdatedResultAction({ trace, select }));
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
          <Gst111Questions
            selected={gst111SelectActions}
            updated={gst111UpdatedResultAction}
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

export default Gst111Quiz;
