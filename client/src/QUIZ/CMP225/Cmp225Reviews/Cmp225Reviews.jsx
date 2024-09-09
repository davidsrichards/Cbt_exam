import { useSelector } from "react-redux";
import GlobalReviews from "../../GLOBAL/GlobalReviews/GlobalReviews";
import { cmp225Helperfunction } from "../Cmp225HelperFunction";

function Cmp225Reviews() {
  const [{ apidata, servererror, isloading }] = cmp225Helperfunction(true);
  const questions = useSelector((state) => state.cmp225question.queue);
  const { results } = useSelector((state) => state.cmp225Result);
  // trace
  const { answers } = useSelector((state) => state.cmp225question);
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

export default Cmp225Reviews;
