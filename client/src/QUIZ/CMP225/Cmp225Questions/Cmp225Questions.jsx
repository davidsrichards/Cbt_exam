import { useSelector } from "react-redux";

import { cmp225Helperfunction } from "../Cmp225HelperFunction";
import GlobalQuestions from "../../GLOBAL/GlobalQuestions/GlobalQuestions";

function Cmp225Questions({ updated, selected, select }) {
  const [{ apidata, servererror, isloading }] = cmp225Helperfunction(true);
  // questions
  const questions = useSelector(
    (state) => state.cmp225question.queue[state.cmp225question.trace]
  );
  // trace
  const trace = useSelector((state) => state.cmp225question.trace);
  // result

  const { results } = useSelector((state) => state.cmp225Result);

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

export default Cmp225Questions;
