import { useDispatch, useSelector } from "react-redux";
import { level100Helperfunction } from "../../Level100HelperFunction/Level100HelperFunction";
import GlobalQuestions from "../../../GLOBAL/GlobalQuestions/GlobalQuestions";
import { gst121StartExamAction } from "../../../../REDOX/Features/LEVEL100/GST121/Gst121QuestionsSlice";

function Gst121Questions({ updated, selected, select }) {
  const dispatch = useDispatch();
  const url = "/api/user/gst121";
  const [{ apidata, servererror, isloading }] = level100Helperfunction(
    true,
    url,
    dispatch,
    gst121StartExamAction
  );

  // questions
  const questions = useSelector(
    (state) => state.gst121question.queue[state.gst121question.trace]
  );
  // trace
  const trace = useSelector((state) => state.gst121question.trace);
  // result

  const { results } = useSelector((state) => state.gst121Result);

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

export default Gst121Questions;
