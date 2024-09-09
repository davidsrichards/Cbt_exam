import { useDispatch, useSelector } from "react-redux";
import { gst112StartExamAction } from "../../../../REDOX/Features/LEVEL100/GST112/Gst112QuestionsSlice";
import GlobalReviews from "../../../GLOBAL/GlobalReviews/GlobalReviews";
import { level100Helperfunction } from "../../Level100HelperFunction/Level100HelperFunction";

function Gst112Reviews() {
  const url = "/api/user/gst112";
  const dispatch = useDispatch();
  const [{ apidata, servererror, isloading }] = level100Helperfunction(
    true,
    url,
    dispatch,
    gst112StartExamAction
  );
  const questions = useSelector((state) => state.gst112question.queue);
  // trace
  const { answers } = useSelector((state) => state.gst112question);
  const { results } = useSelector((state) => state.gst112Result);

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

export default Gst112Reviews;
