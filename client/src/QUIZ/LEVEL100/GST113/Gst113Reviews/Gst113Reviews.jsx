import { useDispatch, useSelector } from "react-redux";
import GlobalReviews from "../../../GLOBAL/GlobalReviews/GlobalReviews";
import { level100Helperfunction } from "../../Level100HelperFunction/Level100HelperFunction";
import { gst113StartExamAction } from "../../../../REDOX/Features/LEVEL100/GST113/Gst113QuestionsSlice";

function Gst113Reviews() {
  const url = "/api/user/gst113";
  const dispatch = useDispatch();
  const [{ apidata, servererror, isloading }] = level100Helperfunction(
    true,
    url,
    dispatch,
    gst113StartExamAction
  );
  const questions = useSelector((state) => state.gst113question.queue);
  // trace
  const { answers } = useSelector((state) => state.gst113question);
  const { results } = useSelector((state) => state.gst113Result);

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

export default Gst113Reviews;
