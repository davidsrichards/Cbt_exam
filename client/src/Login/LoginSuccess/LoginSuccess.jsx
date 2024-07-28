import { useEffect } from "react";
import StartQuiz from "../../QUIZ/StartQuiz/StartQuiz";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function LoginSuccess() {
  const { username } = useSelector((state) => state.user);

  return (
    <>
      <div className="">
        <StartQuiz />
      </div>
    </>
  );
}

export default LoginSuccess;
