import { useSelector } from "react-redux";
import { cmp224Helperfunction } from "../Cmp224HelperFunction";
import GlobalQuestions from "../../GLOBAL/GlobalQuestions/GlobalQuestions";
import { useEffect } from "react";

function Cmp224Questions({ updated, selected, select }) {
  const [{ apidata, servererror, isloading }] = cmp224Helperfunction(true);

  useEffect(() => {
    console.log("from cmp224");
    console.log(apidata);
  });
  // questions
  const questions = useSelector(
    (state) => state.cmp224question.queue[state.cmp224question.trace]
  );
  // trace
  const trace = useSelector((state) => state.cmp224question.trace);
  // result

  const { results } = useSelector((state) => state.cmp224Result);

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

export default Cmp224Questions;
