import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useState, useEffect } from "react";
import GlobalQuizzes from "../../../GLOBAL/GlobalQuizzes/GlobalQuizzes";
import {
  gst112moveToNextQuestionAction,
  gst112moveToPreviousQuestionAction,
} from "../../../../REDOX/Features/LEVEL100/GST112/Gst112QuestionsSlice";
import {
  gst112pushAnswerAction,
  gst112SelectActions,
  gst112UpdatedResultAction,
} from "../../../../REDOX/Features/LEVEL100/GST112/Gst112ResultSlice";
import Gst112Questions from "../Gst112Questions/Gst112Questions";

function Gst112Quiz() {
  //
  const navigate = useNavigate();
  const location = useLocation();
  const [moved, setMoved] = useState(false);
  //
  const dispatch = useDispatch();

  // trace
  const trace = useSelector((state) => state.gst112question.trace);
  // result
  const { results } = useSelector((state) => state.gst112Result);
  // questions
  const question = useSelector((state) => state.gst112question.queue);
  // select
  const select = useSelector((state) => state.gst112Result.select);
  const { timer } = useSelector((state) => state.timerslice);

  ////////////////////////////////////////////////////////////////////////

  // next
  const handleNextButton = () => {
    if (trace < question.length - 1) {
      dispatch(gst112moveToNextQuestionAction());
      if (results.length <= trace) {
        setMoved(true);
        dispatch(gst112pushAnswerAction(select));
      }
    }
  };

  // previous
  const handlePreviousButton = () => {
    if (trace > 0) {
      setMoved(false);
      dispatch(gst112moveToPreviousQuestionAction());
    }
  };

  // navigate to result
  const navigateToResult = () => {
    const current = location.pathname;
    const newPath = current.replace("gst112", "gst112-result");
    return navigate(newPath, { replace: true, relative: true });
  };
  // finish

  const handleFinishedButton = () => {
    dispatch(gst112pushAnswerAction(select));
    navigateToResult();
  };

  // print result

  useEffect(() => {
    if (moved) {
      dispatch(gst112UpdatedResultAction({ trace, select }));
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
          <Gst112Questions
            selected={gst112SelectActions}
            updated={gst112UpdatedResultAction}
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

export default Gst112Quiz;
