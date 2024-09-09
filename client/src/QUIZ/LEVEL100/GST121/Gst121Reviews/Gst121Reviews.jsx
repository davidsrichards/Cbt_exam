import { useDispatch, useSelector } from "react-redux";
import GlobalReviews from "../../../GLOBAL/GlobalReviews/GlobalReviews";
import { level100Helperfunction } from "../../Level100HelperFunction/Level100HelperFunction";
import { gst121StartExamAction } from "../../../../REDOX/Features/LEVEL100/GST121/Gst121QuestionsSlice";

function Gst121Reviews() {
  const url = "/api/user/gst121";
  const dispatch = useDispatch();
  const [{ apidata, servererror, isloading }] = level100Helperfunction(
    true,
    url,
    dispatch,
    gst121StartExamAction
  );
  const questions = useSelector((state) => state.gst121question.queue);
  // trace
  const { answers } = useSelector((state) => state.gst121question);
  const { results } = useSelector((state) => state.gst121Result);

  // result
  return (
    <div className="relative w-full sm:-mt-[30rem] -mt-[45rem]">
      <GlobalReviews
        questions={questions}
        answers={answers}
        results={results}
      />
    </div>
  );
}

export default Gst121Reviews;
