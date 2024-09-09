import { useDispatch, useSelector } from "react-redux";
import { level100Helperfunction } from "../../Level100HelperFunction/Level100HelperFunction";
import { gst112StartExamAction } from "../../../../REDOX/Features/LEVEL100/GST112/Gst112QuestionsSlice";
import GlobalQuestions from "../../../GLOBAL/GlobalQuestions/GlobalQuestions";
import { gst113StartExamAction } from "../../../../REDOX/Features/LEVEL100/GST113/Gst113QuestionsSlice";

function Gst113Questions({ updated, selected, select }) {
  const dispatch = useDispatch();
  const url = "/api/user/gst113";
  const [{ apidata, servererror, isloading }] = level100Helperfunction(
    true,
    url,
    dispatch,
    gst113StartExamAction
  );

  // questions
  const questions = useSelector(
    (state) => state.gst113question.queue[state.gst113question.trace]
  );
  // trace
  const trace = useSelector((state) => state.gst113question.trace);
  // result

  const { results } = useSelector((state) => state.gst113Result);

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

export default Gst113Questions;
