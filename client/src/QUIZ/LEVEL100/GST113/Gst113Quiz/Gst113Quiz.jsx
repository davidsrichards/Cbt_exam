import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useState, useEffect } from "react";
import GlobalQuizzes from "../../../GLOBAL/GlobalQuizzes/GlobalQuizzes";
import {
  gst113pushAnswerAction,
  gst113SelectActions,
  gst113UpdatedResultAction,
} from "../../../../REDOX/Features/LEVEL100/GST113/Gst113ResultSlice";
import {
  gst113moveToNextQuestionAction,
  gst113moveToPreviousQuestionAction,
} from "../../../../REDOX/Features/LEVEL100/GST113/Gst113QuestionsSlice";
import Gst113Questions from "../Gst113Questions/Gst113Questions";

function Gst113Quiz() {
  //
  const navigate = useNavigate();
  const location = useLocation();
  const [moved, setMoved] = useState(false);
  //
  const dispatch = useDispatch();

  // trace
  const trace = useSelector((state) => state.gst113question.trace);
  // result
  const { results } = useSelector((state) => state.gst113Result);
  // questions
  const question = useSelector((state) => state.gst113question.queue);
  // select
  const select = useSelector((state) => state.gst113Result.select);
  const { timer } = useSelector((state) => state.timerslice);

  ////////////////////////////////////////////////////////////////////////

  // next
  const handleNextButton = () => {
    if (trace < question.length - 1) {
      dispatch(gst113moveToNextQuestionAction());
      if (results.length <= trace) {
        setMoved(true);
        dispatch(gst113pushAnswerAction(select));
      }
    }
  };

  // previous
  const handlePreviousButton = () => {
    if (trace > 0) {
      setMoved(false);
      dispatch(gst113moveToPreviousQuestionAction());
    }
  };

  // navigate to result
  const navigateToResult = () => {
    const current = location.pathname;
    const newPath = current.replace("gst113", "gst113-result");
    return navigate(newPath, { replace: true, relative: true });
  };
  // finish

  const handleFinishedButton = () => {
    dispatch(gst113pushAnswerAction(select));
    navigateToResult();
  };

  // print result

  useEffect(() => {
    if (moved) {
      dispatch(gst113UpdatedResultAction({ trace, select }));
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
          <Gst113Questions
            selected={gst113SelectActions}
            updated={gst113UpdatedResultAction}
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

export default Gst113Quiz;
