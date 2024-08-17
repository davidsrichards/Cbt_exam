import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { GlobalResetAllActions } from "../ResetAll/ResetAll";
import { useDispatch } from "react-redux";
import { startTimerAction } from "../../../REDOX/Features/TimerSlice/TimerSlice";

function GlobalResult({ username, onpoint, totalAttempt, resetAll, to }) {
  const dispatch = useDispatch();

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

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen gap-10 contain-content">
        <h1 className="text-[1.5rem] font-bold">Quiz Results</h1>
        <table className="w-[100%] border-collapse">
          <thead>
            <tr>
              <th className="border-1 text-left border-2 p-6 border-[#ddd]bg-[#f2f2f2]">
                Name
              </th>
              <th className="border-1 text-left border-2 p-6 border-[#ddd]bg-[#f2f2f2]">
                Result
              </th>
              <th className="border-1 text-left border-2 p-6 border-[#ddd]bg-[#f2f2f2]">
                Attempts
              </th>
              <th className="border-1 text-left border-2 p-6 border-[#ddd]bg-[#f2f2f2]">
                Points
              </th>
            </tr>
          </thead>
          <tbody>
            {/*  */}
            <tr>
              <td className="border-1 text-left p-6 border-2 border-[#ddd]">
                {username || "Dauda"}
              </td>
              <td
                className={`border-1 text-left p-6 border-2 border-[#ddd] text-${
                  onpoint <= 40 ? "red-500" : "green-500"
                }`}
              >
                {`${achievedGrade(onpoint)}`}
              </td>
              <td className="border-1 text-left p-6 border-2 border-[#ddd]">
                {totalAttempt}
              </td>
              <td className="border-1 text-left p-6 border-2 border-[#ddd]">
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
