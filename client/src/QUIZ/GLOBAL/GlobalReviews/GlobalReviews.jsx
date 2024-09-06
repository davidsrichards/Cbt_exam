import { useEffect, useState } from "react";
import { cmp211helperfunction } from "../../CMP211/Cmp211HelperFunction/Cmp211HelperFunction";
import "./GlobalReviews.css";
import { cmp222Helperfunction } from "../../CMP222/Cmp222HelperFunction";
import { useSelector } from "react-redux";
import { IoMdCheckmark } from "react-icons/io";

function GlobalReviews({ questions, answers }) {
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

  return (
    <div className="flex absolute top-0">
      <div className="flex flex-col justify-center">
        <div className="">
          {questions?.length < 1 && (
            <div className=" fixed top-[50%] left-[50%]">Loading...</div>
          )}

          {questions?.map((q, i) => (
            <div key={i} className="border-2 p-4 bg-white w-full">
              <div className="font-semibold">
                {i + 1}.&nbsp;{q.question}
              </div>
              {q?.options?.map((op, index) => (
                <div key={index} className="flex items-center gap-8">
                  <span className="">{convertToAlphabet(index)}.</span>
                  <span className="flex items-center justify-between gap-4">
                    <span className="flex items-center justify-center gap-2">
                      <span
                        className={`${
                          index === answers[i] ? "text-green-400" : ""
                        }`}
                      >
                        {op}
                      </span>{" "}
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
