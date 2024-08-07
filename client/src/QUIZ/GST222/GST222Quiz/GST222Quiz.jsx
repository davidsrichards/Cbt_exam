import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  gst222moveToNextQuestionAction,
  gst222moveToPreviousQuestionAction,
} from "../../../REDOX/Features/GST222/Gst222QuestionSlice";
import {
  gst222pushAnswerAction,
  gst222SelectActions,
  gst222UpdatedResultAction,
} from "../../../REDOX/Features/GST222/Gst222ResultSlice";
import GlobalQuizzes from "../../GLOBAL/GlobalQuizzes/GlobalQuizzes";
import Gst222Questions from "../GST222Questions/GST222Questions";

function Gst222Quiz() {
  //
  const navigate = useNavigate();
  const location = useLocation();
  const [moved, setMoved] = useState(false);

  //
  const dispatch = useDispatch();

  // trace
  const trace = useSelector((state) => state.gst222question.trace);
  // result
  const { results } = useSelector((state) => state.gst222Result);
  // questions
  const question = useSelector((state) => state.gst222question.queue);
  // select
  const select = useSelector((state) => state.gst222Result.select);
  const { timer } = useSelector((state) => state.timerslice);
  ////////////////////////////////////////////////////////////////////////

  // next
  const handleNextButton = () => {
    if (trace < question.length - 1) {
      dispatch(gst222moveToNextQuestionAction());
      if (results.length <= trace) {
        setMoved(true);

        dispatch(gst222pushAnswerAction(select));
      }
    }
  };

  // previous
  const handlePreviousButton = () => {
    if (trace > 0) {
      setMoved(false);
      dispatch(gst222moveToPreviousQuestionAction());
    }
  };

  // navigate to result

  const navigateToResult = () => {
    const current = location.pathname;
    const newPath = current.replace("gst222", "gst222-result");
    return navigate(newPath, { replace: true, relative: true });
  };

  // finish

  const handleFinishedButton = () => {
    dispatch(gst222pushAnswerAction(select));
    navigateToResult();
  };

  useEffect(() => {
    if (moved) {
      dispatch(gst222UpdatedResultAction({ trace, select }));
    }
  }, [trace, select, moved]);

  // if ended

  useEffect(() => {
    if (timer === 0) {
      navigateToResult();
    }
  }, [timer]);

  return (
    <>
      <GlobalQuizzes
        questions={
          <Gst222Questions
            selected={gst222SelectActions}
            updated={gst222UpdatedResultAction}
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

export default Gst222Quiz;
