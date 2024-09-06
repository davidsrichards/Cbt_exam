import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function GlobalQuestions({
  questions,
  trace,
  select,
  results,
  updated,
  selected,
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updated({ trace, select }));
  }, [select]);

  return (
    <>
      {!questions && (
        <div className="fixed top-[50%] left-[50%]">Loading...</div>
      )}
      <div className="questions w-full">
        <h2 className="text-light">{questions?.question}</h2>
        <ul key={trace} className="">
          {questions?.options.map((q, i) => (
            <li key={i} className="sm:pb-0 pb-2 sm:h-[100px] h-[125px]">
              <input
                type="radio"
                value={false}
                name="options"
                id={`q${i}-option`}
                onChange={() => {
                  dispatch(selected(i));
                  dispatch(updated(i));
                }}
              />
              <label className="text-primary" htmlFor={`q${i}-option`}>
                {q}
              </label>
              <div
                className={`check ${results[trace] == i ? "checked" : ""}`}
              ></div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default GlobalQuestions;
