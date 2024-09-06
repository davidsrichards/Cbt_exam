import { useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { GlobalResetAllActions } from "../ResetAll/ResetAll";
import { useDispatch, useSelector } from "react-redux";
import { startTimerAction } from "../../../REDOX/Features/TimerSlice/TimerSlice";
import GlobalAnwers from "../GlobalAnwers/GlobalAnwers";

function GlobalResult({
  onpoint,
  totalAttempt,
  resetAll,
  to,
  oldPath,
  newAPath,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    dispatch(startTimerAction(false));
  }, []);

  // achieved grade

  const achievedGrade = (achieved) => {
    let grade = "";
    if (achieved < 40) grade = "F";
    else if (achieved >= 40 && achieved < 50) grade = "D";
    else if (achieved >= 50 && achieved < 60) grade = "C";
    else if (achieved >= 60 && achieved < 70) grade = "B";
    else grade = "A";
    return grade;
  };

  const user = useSelector((state) => state.user.googleInformation.username);
  const { username } = useSelector((state) => state.user);

  const moveToReviews = () => {
    const currenPath = location.pathname;
    const newPath = currenPath.replace(oldPath, newAPath);
    return navigate(newPath, { replace: true, relative: true });
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center  gap-10 contain-content overflow-auto border-4 relative p-4">
        <button
          onClick={moveToReviews}
          className="absolute top-4 right-4 bg-primary text-white p-2 rounded-md cursor-pointer answer-container"
        >
          Review
        </button>
        {/*      <GlobalAnwers apidata={apidata} index={index} /> */}

        <h1 className="text-[1.5rem] font-bold">Quiz Results</h1>
        <div className="answer-container p-2 text-nowrap">
          Congratulation <span>{username}</span>
        </div>
        <table className="border-collapse">
          <thead>
            <tr>
              <th className="border-1 text-left border-2 p-5 border-[#ddd] bg-[#f2f2f2]">
                Name
              </th>
              <th className="border-1 text-left border-2 p-5 border-[#ddd] bg-[#f2f2f2]">
                Grade
              </th>
              <th className="border-1 text-left border-2 p-5 border-[#ddd] bg-[#f2f2f2] first-line:bg-[#f2f2f2]">
                Attempts
              </th>
              <th className="border-1 text-left border-2 p-5 border-[#ddd] bg-[#f2f2f2]">
                Points
              </th>
            </tr>
          </thead>
          <tbody>
            {/*  */}
            <tr>
              <td className="border-1 text-left p-5 border-2 border-[#ddd] font-[italic]">
                {username || user}
              </td>
              <td
                className={`border-1 text-left p-5 border-2 border-[#ddd] text-${
                  onpoint <= 40 ? "red-500" : "green-500"
                }`}
              >
                {`${achievedGrade(onpoint)}`}
              </td>
              <td className="border-1 text-left p-5 border-2 border-[#ddd]">
                {totalAttempt}
              </td>
              <td className="border-1 text-left p-5 border-2 border-[#ddd]">
                {onpoint}
              </td>
            </tr>

            {/*  */}
          </tbody>
        </table>

        {/*  */}

        <NavLink className="text-white font-bold" to={to}>
          <button
            className="bg-blue-400 w-[10rem] h-[3rem] rounded-lg text-xl"
            onClick={() => {
              resetAll;
              GlobalResetAllActions(dispatch);
              dispatch(startTimerAction(true));
            }}
          >
            {" "}
            Restart Quiz
          </button>
        </NavLink>
      </div>
    </>
  );
}

export default GlobalResult;
