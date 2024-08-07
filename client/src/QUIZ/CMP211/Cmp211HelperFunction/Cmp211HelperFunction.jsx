import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { startCMP211ExamAction } from "../../../REDOX/Features/CMP211SLICE/cmp211slice";
const BASE_URL = "/api/user";
export function cmp211helperfunction(option) {
  const dispatch = useDispatch();
  //
  const [examdata, setexamdata] = useState({
    apidata: [],
    servererror: null,
    isloading: false,
  });
  //
  useEffect(() => {
    setexamdata((prev) => ({ ...prev, isloading: true }));
    if (option) {
      const fetQuestions = async () => {
        try {
          const { data } = await axios.get(`${BASE_URL}/cmp211`);
          setexamdata((prev) => ({ ...prev, isloading: false }));
          const response = [data[0].questions, data[0].answers];
          const questions = data[0].questions,
            answers = data[0].answers;
          setexamdata((prev) => ({ ...prev, apidata: response }));
          dispatch(startCMP211ExamAction({ questions, answers }));
        } catch (error) {
          setexamdata((prev) => ({ ...prev, servererror: error }));
          setexamdata((prev) => ({ ...prev, isloading: false }));
        }
      };
      fetQuestions();
    }
  }, []);

  return [examdata, setexamdata];
}
