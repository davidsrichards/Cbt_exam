import { NavLink } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  openQuizAction,
  resetTimerAction,
  startTimerAction,
} from "../../../REDOX/Features/TimerSlice/TimerSlice";
import { cmp223resetResultAction } from "../../../REDOX/Features/CMP223/Cmp223ResultSlice";
import { cmp211resetResultAction } from "../../../REDOX/Features/CMP211SLICE/cmp211resulltslice";
import { cmp222resetResultAction } from "../../../REDOX/Features/CMP222/Cmp222ResultSlice";
import { gst222resetResultAction } from "../../../REDOX/Features/GST222/Gst222ResultSlice";
import { cmp211ResetAllActions } from "../../../REDOX/Features/CMP211SLICE/cmp211slice";
import { cmp222ResetAllActions } from "../../../REDOX/Features/CMP222/Cmp222QuestionsSlice";
import { cmp223ResetAllActions } from "../../../REDOX/Features/CMP223/Cmp223QuestionSlice";
import { gst222ResetAllActions } from "../../../REDOX/Features/GST222/Gst222QuestionSlice";
import { cmp225ResetAllActions } from "../../../REDOX/Features/CMP225/Cmp225QuestionSlice";
import { cmp225resetResultAction } from "../../../REDOX/Features/CMP225/Cmp225ResultSlice";
import { handleShowErrorAction } from "../../../REDOX/Features/GlobalSlice/GlobalSlice";
import { startAllActions } from "../GlobalHelperFunction/GlobalHelperFunction";

function GlobalInitial({ length, setter, to, url, reviews }) {
  const dispatch = useDispatch();
  const [server, setServer] = useState({
    serverError: false,
    isLoading: false,
  });

  useEffect(() => {
    const getLength = async () => {
      setServer((prev) => ({ ...prev, isLoading: true }));
      try {
        const response = await axios.get(url);

        if (response) {
          setServer((prev) => ({ ...prev, isLoading: false }));
          setServer((prev) => ({ ...prev, serverError: false }));
          setter(response?.data[0].questions);
        }
      } catch (error) {
        setServer((prev) => ({ ...prev, serverError: true }));
        setServer((prev) => ({ ...prev, isLoading: false }));
        return error;
      }
    };
    getLength();
  }, []);

  // stop timer

  useEffect(() => {
    startAllActions(dispatch);
  }, [dispatch]);

  useEffect(() => {
    dispatch(resetTimerAction());
  }, []);

  // if loading

  if (server.isLoading) return <div className="text-[#fff]">Loading...</div>;
  if (server.serverError)
    return (
      <div className="text-[#fff]">
        Hey, please check your internet connection 😎
      </div>
    );

  return (
    <div className="container p-2 mx-auto">
      <div className="text-white flex items-center justify-center flex-col gap-12 p-12 rounded-lg select-ct">
        <ul
          role="list"
          className="text-[1.1rem] items-center space-y-4 text-center text-[#fff] rounded-md"
        >
          <li className="leading-4">
            you will be given
            <span className="font-bold font-mono">
              &nbsp; {length?.length}{" "}
            </span>
            &nbsp; questions.
          </li>
          <li className="leading-4">each question contains 4 options.</li>
          <li className="leading-4">
            you are to click on Submit After you're done with the quiz.
          </li>
        </ul>

        <div className="flex items-center justify-around  w-full">
          <NavLink to={to} className="font-bold">
            <button
              className="bg-primary w-[7rem] h-[2.5rem] rounded-lg transition delay-75 duration-150 hover:bg-opacity-85"
              onClick={() => dispatch(startTimerAction(true))}
            >
              Start Quiz
            </button>
          </NavLink>
          <NavLink to={reviews} className="font-bold">
            <button className="bg-primary w-[7rem] h-[2.5rem] rounded-lg transition delay-75 duration-150 hover:bg-opacity-85">
              Review
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default GlobalInitial;
