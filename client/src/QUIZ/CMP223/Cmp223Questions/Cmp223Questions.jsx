import { useSelector } from "react-redux";

import { cmp223Helperfunction } from "../Cmp223HelperFunction";
import { useEffect } from "react";
import GlobalQuestions from "../../GLOBAL/GlobalQuestions/GlobalQuestions";

function Cmp223Questions({ updated, selected, select }) {
  const [{ apidata, servererror, isloading }] = cmp223Helperfunction(true);
  // questions
  const questions = useSelector(
    (state) => state.cmp223question.queue[state.cmp223question.trace]
  );
  // trace
  const trace = useSelector((state) => state.cmp223question.trace);
  // result

  const { results } = useSelector((state) => state.cmp223Result);

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

export default Cmp223Questions;
