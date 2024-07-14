import { useEffect } from "react";
import StartQuiz from "../../QUIZ/StartQuiz/StartQuiz";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function LoginSuccess() {
  const { username } = useSelector((state) => state.user);
  useEffect(() => {
    console.log(username);
  });

  return (
    <>
      <div className="">
        {username ? (
          <StartQuiz />
        ) : (
          <Navigate to={"/"} replace={true}></Navigate>
        )}
      </div>
    </>
  );
}

export default LoginSuccess;
