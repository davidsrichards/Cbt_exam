import { useEffect, useState } from "react";
import { cmp211helperfunction } from "../../CMP211/Cmp211HelperFunction/Cmp211HelperFunction";
import "./GlobalReviews.css";
import { cmp222Helperfunction } from "../../CMP222/Cmp222HelperFunction";
import { useSelector } from "react-redux";
import { IoMdCheckmark } from "react-icons/io";
import { LiaTimesSolid } from "react-icons/lia";

function GlobalReviews({ questions, answers, results }) {
  //
  const convertToAlphabet = (index) => {
    let display = "";
    switch (true) {
      case index === 0:
        display = "A";
        break;
      case index === 1:
        display = "B";
        break;
      case index === 2:
        display = "C";
        break;
      case index === 3:
        display = "D";
        break;
    }
    return display;
  };

  const { showError } = useSelector((state) => state.globalslice);

  return (
    <div className="flex absolute top-0  w-full">
      <div className="flex flex-col justify-center grow w-full">
        <div className="">
          {questions?.length < 1 && (
            <div className=" fixed top-[50%] lg:left-[50%] left-[45%] text-[#fff]">
              Loading...
            </div>
          )}

          {questions?.map((q, i) => (
            <div key={i} className="ring-1 ring-slate-700 p-4 bg-white w-full">
              <div className="font-semibold flex">
                <span>{i + 1}</span>.&nbsp;{q.question}
              </div>
              {q?.options?.map((op, index) => (
                <div key={index} className="flex gap-8">
                  <span className="">{convertToAlphabet(index)}.</span>
                  <span className="flex items-center justify-between gap-4">
                    <span className="flex items-center justify-center gap-2">
                      <span
                        className={`${
                          index === answers[i] ? "text-green-400" : ""
                        } ${
                          showError &&
                          results &&
                          index !== answers[i] &&
                          index === results[i] &&
                          "text-red-400"
                        }`}
                      >
                        {op}
                      </span>{" "}
                      {showError &&
                        results &&
                        index !== answers[i] &&
                        index === results[i] && <LiaTimesSolid />}
                      {index === answers[i] && <IoMdCheckmark />}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GlobalReviews;
