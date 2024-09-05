import { useSelector } from "react-redux";

import { cmp222Helperfunction } from "../Cmp222HelperFunction";
import { useEffect } from "react";
import GlobalQuestions from "../../GLOBAL/GlobalQuestions/GlobalQuestions";

function Cmp222Questions({ updated, selected, select }) {
  const [{ apidata, servererror, isloading }] = cmp222Helperfunction(true);

  // questions
  const questions = useSelector(
    (state) => state.cmp222question.queue[state.cmp222question.trace]
  );
  // trace
  const trace = useSelector((state) => state.cmp222question.trace);
  // result

  const { results } = useSelector((state) => state.cmp222Result);

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

export default Cmp222Questions;
