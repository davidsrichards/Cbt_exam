import { NavLink } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
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

function GlobalInitial({ length, setter, to, url }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const getLength = async () => {
      try {
        const response = await axios.get(url);
        if (response) {
          setter(response?.data[0].questions);
        }
      } catch (error) {
        return error;
      }
    };
    getLength();
  }, []);

  // stop timer

  useEffect(() => {
    dispatch(startTimerAction(false));
    dispatch(cmp211resetResultAction());
    dispatch(cmp222resetResultAction());
    dispatch(cmp223resetResultAction());
    dispatch(gst222resetResultAction());
    dispatch(cmp211ResetAllActions());
    dispatch(cmp222ResetAllActions());
    dispatch(cmp223ResetAllActions());
    dispatch(gst222ResetAllActions());
  }, [dispatch]);

  useEffect(() => {
    dispatch(resetTimerAction());
  }, []);
  return (
    <>
      <div className=" bg-[url(https://images.unsplash.com/photo-1501139083538-0139583c060f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] w-full h-screen bg-cover bg-center bg-fixed bg-no-repeat flex items-center justify-center">
        <div className="text-white flex items-center justify-center flex-col gap-12 bg-neutral-400 p-12 rounded-lg">
          <ul
            role="list"
            className="gap-4 flex flex-col text-[1.1rem] items-center"
          >
            <li>you will be given {length?.length} questions</li>
            <li>and each question contains 4 options</li>
            <li>you are to click on submit once done with the quiz</li>
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
