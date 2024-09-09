import { useDispatch, useSelector } from "react-redux";
import { level100Helperfunction } from "../../Level100HelperFunction/Level100HelperFunction";
import { gst111StartExamAction } from "../../../../REDOX/Features/LEVEL100/GST111/Gst111QuestionsSlice";
import GlobalQuestions from "../../../GLOBAL/GlobalQuestions/GlobalQuestions";

function Gst111Questions({ updated, selected, select }) {
  const dispatch = useDispatch();
  const url = "/api/user/gst111";
  const [{ apidata, servererror, isloading }] = level100Helperfunction(
    true,
    url,
    dispatch,
    gst111StartExamAction
  );

  // questions
  const questions = useSelector(
    (state) => state.gst111question.queue[state.gst111question.trace]
  );
  // trace
  const trace = useSelector((state) => state.gst111question.trace);
  // result

  const { results } = useSelector((state) => state.gst111Result);

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

export default Gst111Questions;
