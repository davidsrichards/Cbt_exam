import { useDispatch, useSelector } from "react-redux";
import { level200Helperfunction } from "../../Level200/Level200HelperFunction/Level200HelperFunction";
import { esp221StartExamAction } from "../../../REDOX/Features/Level200/ESP221/Esp221QuestionsSlice";
import GlobalQuestions from "../../GLOBAL/GlobalQuestions/GlobalQuestions";

function Esp221Questions({ updated, selected, select }) {
  const dispatch = useDispatch();
  const url = "/api/user/esp221";
  const [{ apidata, servererror, isloading }] = level200Helperfunction(
    true,
    url,
    dispatch,
    esp221StartExamAction
  );

  // questions
  const questions = useSelector(
    (state) => state.esp221question.queue[state.esp221question.trace]
  );
  // trace
  const trace = useSelector((state) => state.esp221question.trace);
  // result

  const { results } = useSelector((state) => state.esp221Result);

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

export default Esp221Questions;
