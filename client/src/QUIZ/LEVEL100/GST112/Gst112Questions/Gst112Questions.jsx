import { useDispatch, useSelector } from "react-redux";
import { level100Helperfunction } from "../../Level100HelperFunction/Level100HelperFunction";
import { gst112StartExamAction } from "../../../../REDOX/Features/LEVEL100/GST112/Gst112QuestionsSlice";
import GlobalQuestions from "../../../GLOBAL/GlobalQuestions/GlobalQuestions";

function Gst112Questions({ updated, selected, select }) {
  const dispatch = useDispatch();
  const url = "/api/user/gst112";
  const [{ apidata, servererror, isloading }] = level100Helperfunction(
    true,
    url,
    dispatch,
    gst112StartExamAction
  );

  // questions
  const questions = useSelector(
    (state) => state.gst112question.queue[state.gst112question.trace]
  );
  // trace
  const trace = useSelector((state) => state.gst112question.trace);
  // result

  const { results } = useSelector((state) => state.gst112Result);

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

export default Gst112Questions;
