import { NavLink } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
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

function GlobalInitial({ length, setter, to, url }) {
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
    dispatch(startTimerAction(false));
    dispatch(cmp211ResetAllActions());
    dispatch(cmp222ResetAllActions());
    dispatch(cmp223ResetAllActions());
    dispatch(gst222ResetAllActions());
    dispatch(cmp211resetResultAction());
    dispatch(cmp222resetResultAction());
    dispatch(cmp223resetResultAction());
    dispatch(gst222resetResultAction());
    dispatch(cmp225ResetAllActions());
    dispatch(cmp225resetResultAction());
  }, [dispatch]);

  useEffect(() => {
    dispatch(resetTimerAction());
  }, []);

  // if loading

  if (server.isLoading) return <div>Loading...</div>;
  if (server.serverError) return <div>Server Error</div>;

  return (
    <>
      <div className="global-initial rounded-lg h-screen">
        <div className="text-white flex items-center justify-center flex-col gap-12 p-12 rounded-lg">
          <ul
            role="list"
            className="text-[1.1rem] items-center space-y-4 text-center"
          >
            <li>you will be given {length?.length} questions</li>
            <li>and each question contains 4 options</li>
            <li>you are to click on Submit once done with the quiz</li>
          </ul>

          <NavLink to={to} className="font-bold">
            <button
              className="bg-blue-400 w-[7rem] h-[3rem] rounded-lg transition delay-75 duration-150 hover:bg-blue-500"
              onClick={() => dispatch(startTimerAction(true))}
            >
              Start Quiz
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default GlobalInitial;
