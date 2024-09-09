import { useSelector } from "react-redux";
import GlobalReviews from "../../GLOBAL/GlobalReviews/GlobalReviews";
import { cmp222Helperfunction } from "../Cmp222HelperFunction";

function Cmp222Reviews() {
  const [{ apidata, servererror, isloading }] = cmp222Helperfunction(true);
  const questions = useSelector((state) => state.cmp222question.queue);
  // trace
  const { answers } = useSelector((state) => state.cmp222question);
  const { results } = useSelector((state) => state.cmp222Result);

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

export default Cmp222Reviews;
