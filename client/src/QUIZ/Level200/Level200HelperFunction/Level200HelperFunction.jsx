import axios from "axios";
import { useEffect, useState } from "react";

export function level200Helperfunction(option, url, dispatch, startExamAction) {
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
          const { data } = await axios.get(url);
          setexamdata((prev) => ({ ...prev, isloading: false }));
          const response = [data[0].questions, data[0].answers];
          const questions = data[0].questions,
            answers = data[0].answers;
          setexamdata((prev) => ({ ...prev, apidata: response }));
          dispatch(startExamAction({ questions, answers }));
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
