import { useDispatch, useSelector } from "react-redux";
import { level100Helperfunction } from "../../Level100HelperFunction/Level100HelperFunction";
import { gst111StartExamAction } from "../../../../REDOX/Features/LEVEL100/GST111/Gst111QuestionsSlice";
import GlobalReviews from "../../../GLOBAL/GlobalReviews/GlobalReviews";

function Gst111Reviews() {
  const url = "/api/user/gst111";
  const dispatch = useDispatch();
  const [{ apidata, servererror, isloading }] = level100Helperfunction(
    true,
    url,
    dispatch,
    gst111StartExamAction
  );
  const questions = useSelector((state) => state.gst111question.queue);
  // trace
  const { answers } = useSelector((state) => state.gst111question);
  const { results } = useSelector((state) => state.gst111Result);

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

export default Gst111Reviews;
