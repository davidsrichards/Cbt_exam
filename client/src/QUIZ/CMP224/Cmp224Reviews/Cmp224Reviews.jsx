import { useSelector } from "react-redux";
import { cmp224Helperfunction } from "../Cmp224HelperFunction";
import GlobalReviews from "../../GLOBAL/GlobalReviews/GlobalReviews";

function Cmp224Reviews() {
  const [{ apidata, servererror, isloading }] = cmp224Helperfunction(true);
  const questions = useSelector((state) => state.cmp224question.queue);
  // trace
  const { answers } = useSelector((state) => state.cmp224question);
  const { results } = useSelector((state) => state.cmp224Result);
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

export default Cmp224Reviews;
