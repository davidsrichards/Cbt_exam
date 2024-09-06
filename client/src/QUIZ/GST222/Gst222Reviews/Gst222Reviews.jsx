import { useSelector } from "react-redux";
import GlobalReviews from "../../GLOBAL/GlobalReviews/GlobalReviews";
import { get222Helperfunction } from "../GST222HelperFunction";

function Gst222Reviews() {
  const [{ apidata, servererror, isloading }] = get222Helperfunction(true);
  const questions = useSelector((state) => state.gst222question.queue);
  // trace
  const { answers } = useSelector((state) => state.gst222question);
  // result
  return (
    <div className="relative w-full sm:-mt-[30rem] -mt-[45rem]">
      <GlobalReviews questions={questions} answers={answers} />
    </div>
  );
}

export default Gst222Reviews;
