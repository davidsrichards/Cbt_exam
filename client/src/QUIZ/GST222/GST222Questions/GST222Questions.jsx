import { useSelector } from "react-redux";
import { useEffect } from "react";
import GlobalQuestions from "../../GLOBAL/GlobalQuestions/GlobalQuestions";
import { get222Helperfunction } from "../GST222HelperFunction";

function Gst222Questions({ updated, selected, select }) {
  const [{ apidata, servererror, isloading }] = get222Helperfunction(true);
  // questions
  const questions = useSelector(
    (state) => state.gst222question.queue[state.gst222question.trace]
  );
  // trace
  const trace = useSelector((state) => state.gst222question.trace);
  // result

  const { results } = useSelector((state) => state.gst222Result);

  // handle change

  return (
    <>
      <GlobalQuestions
        questions={questions}
        trace={trace}
        results={results}
        updated={updated}
        selected={selected}
        select={select}
      />
    </>
  );
}

export default Gst222Questions;
