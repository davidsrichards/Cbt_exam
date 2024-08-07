import { useSelector } from "react-redux";
import GlobalQuestions from "../../GLOBAL/GlobalQuestions/GlobalQuestions";
import { cmp211helperfunction } from "../Cmp211HelperFunction/Cmp211HelperFunction";

function Cmp211Questions({ updated, selected, select }) {
  const [apidata, servererror, isloading] = cmp211helperfunction(true);

  // questions
  const questions = useSelector(
    (state) => state.cmp211question.queue[state.cmp211question.trace]
  );
  // trace
  const trace = useSelector((state) => state.cmp211question.trace);
  // result

  const { results } = useSelector((state) => state.cmp211Result);

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

export default Cmp211Questions;
