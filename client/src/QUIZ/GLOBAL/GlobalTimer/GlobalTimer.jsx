import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  endTimerAction,
  getTimersAction,
  resetTimerAction,
} from "../../../REDOX/Features/TimerSlice/TimerSlice";

function GlobalTimer() {
  const dispatch = useDispatch();
  const time = useSelector((state) => state.timerslice.timer);
  /*   const [timer, setTimer] = useState(time); */

  const { started } = useSelector((state) => state.timerslice);
  ///

  useEffect(() => {
    if (started) {
      if (time > 0) {
        const interval = setInterval(() => {
          dispatch(getTimersAction());
        }, 1000);
        return () => {
          clearInterval(interval);
        };
      }
    } else {
      dispatch(resetTimerAction());
    }
  }, [dispatch]);

  /*   const minutes = Math.floor((timer % 900) / 60);
  const seconds = timer % 60; */

  useEffect(() => {
    if (time === 0) {
      console.log("time", time);
      dispatch(endTimerAction(true));
    }
  }, [time]);

  /*   return [minutes, second]; */
}

export default GlobalTimer;
