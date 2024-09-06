import { useSelector } from "react-redux";
import GlobalReviews from "../../GLOBAL/GlobalReviews/GlobalReviews";
import { cmp222Helperfunction } from "../Cmp222HelperFunction";

function Cmp222Reviews() {
  const [{ apidata, servererror, isloading }] = cmp222Helperfunction(true);
  const questions = useSelector((state) => state.cmp222question.queue);
  // trace
  const { answers } = useSelector((state) => state.cmp222question);
  // result
  return (
    <div className="relative w-full sm:-mt-[30rem] -mt-[45rem]">
      <GlobalReviews questions={questions} answers={answers} />
    </div>
  );
}

export default Cmp222Reviews;
