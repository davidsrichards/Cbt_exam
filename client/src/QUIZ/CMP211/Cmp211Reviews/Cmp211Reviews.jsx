import { useSelector } from "react-redux";
import GlobalReviews from "../../GLOBAL/GlobalReviews/GlobalReviews";
import { useEffect } from "react";
import { cmp211helperfunction } from "../Cmp211HelperFunction/Cmp211HelperFunction";

function Cmp211Reviews() {
  const [apidata, servererror, isloading] = cmp211helperfunction(true);
  const questions = useSelector((state) => state.cmp211question.queue);
  const { answers } = useSelector((state) => state.cmp211question);
  const { results } = useSelector((state) => state.cmp211Result);

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

export default Cmp211Reviews;
