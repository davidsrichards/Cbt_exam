import { useSelector } from "react-redux";
import GlobalReviews from "../../GLOBAL/GlobalReviews/GlobalReviews";
import { cmp223Helperfunction } from "../Cmp223HelperFunction";

function Cmp223Reviews() {
  const [{ apidata, servererror, isloading }] = cmp223Helperfunction(true);
  const questions = useSelector((state) => state.cmp223question.queue);
  // trace
  const { answers } = useSelector((state) => state.cmp223question);
  const { results } = useSelector((state) => state.cmp223Result);
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

export default Cmp223Reviews;
