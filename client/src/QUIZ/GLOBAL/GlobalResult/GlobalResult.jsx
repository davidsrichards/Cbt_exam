import { useEffect, useRef } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { GlobalResetAllActions } from "../ResetAll/ResetAll";
import { useDispatch, useSelector } from "react-redux";
import { startTimerAction } from "../../../REDOX/Features/TimerSlice/TimerSlice";
import GlobalAnwers from "../GlobalAnwers/GlobalAnwers";
import { handleShowErrorAction } from "../../../REDOX/Features/GlobalSlice/GlobalSlice";
import { FaStar } from "react-icons/fa";
import { motion, useInView, useAnimation } from "framer-motion";

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
  const ref1 = useRef();
  const inView = useInView(ref1, { once: true });
  const control = useAnimation();
  //
  const ref2 = useRef();
  const inView2 = useInView(ref2, { once: true });
  const control2 = useAnimation();

  // animate

  useEffect(() => {
    if (inView2) {
      control2.start("visible");
    }
  }, [inView2, control2]);
  //
  useEffect(() => {
    if (inView2) {
      control2.start("visible2");
    }
  }, [inView2, control2]);

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
    dispatch(handleShowErrorAction(true));
    const currenPath = location.pathname;
    const newPath = currenPath.replace(oldPath, newAPath);
    return navigate(newPath, { replace: true, relative: true });
  };

  return (
    <div className="container p-4 mx-auto bg-gray-400">
      <div className="flex flex-col items-center justify-center  gap-10 contain-content overflow-auto  relative select-ct py-4">
        <button
          onClick={moveToReviews}
          className="absolute top-4 right-4 bg-primary text-white p-2 rounded-md cursor-pointer answer-container"
        >
          Review
        </button>
        {/*      <GlobalAnwers apidata={apidata} index={index} /> */}

        <h1 className="text-[1.5rem] font-bold">Quiz Results</h1>
        <div className="flex flex-col items-center gap-2">
          {achievedGrade(onpoint) === "A" && (
            <div className="flex items-center justify-around gap-4 text-[1.3rem]">
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: -100 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 1, delay: 0.5, ease: "linear" }}
                initial="hidden"
                animate="visible"
              >
                <FaStar className="text-yellow-600 first" />
              </motion.span>
              {/*  */}
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: -100 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 1, delay: 1.5, ease: "linear" }}
                initial="hidden"
                animate="visible"
              >
                <FaStar className="text-yellow-600 first" />
              </motion.span>
              {/*  */}
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: -100 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 1, delay: 2.5, ease: "linear" }}
                initial="hidden"
                animate="visible"
              >
                <FaStar className="text-yellow-600 first" />
              </motion.span>
            </div>
          )}
          {achievedGrade(onpoint) === "B" && (
            <div className="flex items-center justify-around gap-2 text-[1.4rem]">
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: -100 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 1, delay: 0.5, ease: "linear" }}
                initial="hidden"
                animate="visible"
              >
                <FaStar className="text-yellow-600 first" />
              </motion.span>
              {/*  */}
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: -100 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 1, delay: 1.5, ease: "linear" }}
                initial="hidden"
                animate="visible"
              >
                <FaStar className="text-yellow-600 first" />
              </motion.span>
            </div>
          )}
          {achievedGrade(onpoint) === "C" && (
            <div className="flex text-[1.4rem]">
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: -100 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 1, delay: 1.5, ease: "linear" }}
                initial="hidden"
                animate="visible"
              >
                <FaStar className="text-yellow-600 first" />
              </motion.span>
            </div>
          )}
          <div className="answer-container p-2 text-nowrap">
            <span>
              {achievedGrade(onpoint) === "A" && "Excellent"}
              {achievedGrade(onpoint) === "B" && "Bravo"}
              {achievedGrade(onpoint) === "C" && "Commendable"}
              {achievedGrade(onpoint) === "D" && "Developing"}
              {achievedGrade(onpoint) === "E" && "Effort Needed"}
              {achievedGrade(onpoint) === "F" && "Falling"}
            </span>
            &nbsp;
            <span>{username}</span>
          </div>
        </div>
        <table className="border-collapse">
          <thead>
            <tr>
              <th className="border-1 text-left border-2 p-5 border-[#ddd] bg-[#f2f2f2] bg-opacity-50">
                Name
              </th>
              <th className="border-1 text-left border-2 p-5 border-[#ddd] bg-[#f2f2f2] bg-opacity-50">
                Grade
              </th>
              <th className="border-1 text-left border-2 p-5 border-[#ddd] bg-[#f2f2f2] bg-opacity-50">
                Attempts
              </th>
              <th className="border-1 text-left border-2 p-5 border-[#ddd] bg-[#f2f2f2] bg-opacity-50">
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
            Restart Quiz
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default GlobalResult;
