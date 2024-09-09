import { useDispatch, useSelector } from "react-redux";
import { esp221StartExamAction } from "../../../REDOX/Features/Level200/ESP221/Esp221QuestionsSlice";
import GlobalReviews from "../../GLOBAL/GlobalReviews/GlobalReviews";
import { level200Helperfunction } from "../../Level200/Level200HelperFunction/Level200HelperFunction";

function Esp221Reviews() {
  const url = "/api/user/esp221";
  const dispatch = useDispatch();
  const [{ apidata, servererror, isloading }] = level200Helperfunction(
    true,
    url,
    dispatch,
    esp221StartExamAction
  );
  const questions = useSelector((state) => state.esp221question.queue);
  // trace
  const { answers } = useSelector((state) => state.esp221question);
  const { results } = useSelector((state) => state.esp221Result);

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

export default Esp221Reviews;
